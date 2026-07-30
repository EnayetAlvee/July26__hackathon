import {z} from 'zod';
import type {ArchivePack,Evidence} from '../types';
export const mutableFields=new Set(['integrityHash','verifiedAt','uiState']);
export function canonicalize(value:unknown):string{
  if(value===null||typeof value!=='object')return JSON.stringify(value);
  if(Array.isArray(value))return `[${value.map(canonicalize).join(',')}]`;
  return `{${Object.entries(value as Record<string,unknown>).filter(([k])=>!mutableFields.has(k)).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${JSON.stringify(k)}:${canonicalize(v)}`).join(',')}}`;
}
export async function sha256(value:unknown){const bytes=new TextEncoder().encode(typeof value==='string'?value:canonicalize(value));const hash=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('')}
export async function verifyEvidence(record:Evidence){return (await sha256(record))===record.integrityHash}
const url=z.string().url().refine(v=>/^https?:\/\//.test(v));
export const evidenceSchema=z.object({id:z.string().min(1).max(80),eventId:z.string().max(80),titleEn:z.string().min(1).max(160),titleBn:z.string().min(1).max(160),summaryEn:z.string().min(1).max(1200),summaryBn:z.string().min(1).max(1200),date:z.string().max(40),locationEn:z.string().max(160),locationBn:z.string().max(160),sourceType:z.string().max(80),sourceName:z.string().max(160),sourceUrl:url.optional().or(z.literal('')),archivedUrl:url.optional(),corroboratingSourceIds:z.array(z.string()).max(50),verificationStatus:z.enum(['Source linked','Corroborated','Community submitted','Under review','Disputed','Archived demonstration']),consentStatus:z.string().max(160),reuseLicence:z.string().max(160),submittedByType:z.string().max(80),createdAt:z.string(),updatedAt:z.string(),integrityHash:z.string().regex(/^[a-f0-9]{64}$/),demoOnly:z.boolean(),notesEn:z.string().max(1200),notesBn:z.string().max(1200)});
export const packSchema=z.object({format:z.literal('shakkho-archive-pack'),version:z.literal(1),exportedAt:z.string(),language:z.string(),records:z.array(evidenceSchema).max(500),packFingerprint:z.string().regex(/^[a-f0-9]{64}$/)});
export async function makePack(records:Evidence[],language:string):Promise<ArchivePack>{const base={format:'shakkho-archive-pack' as const,version:1 as const,exportedAt:new Date().toISOString(),language,records};return {...base,packFingerprint:await sha256(base)}}
export function classifyImport(incoming:Evidence[],existing:Evidence[]){const result={added:[] as Evidence[],duplicates:[] as Evidence[],conflicts:[] as Evidence[]};for(const r of incoming){const old=existing.find(x=>x.id===r.id);if(!old)result.added.push(r);else if(old.integrityHash===r.integrityHash)result.duplicates.push(r);else result.conflicts.push(r)}return result}
