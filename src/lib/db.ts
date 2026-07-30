import Dexie,{type EntityTable} from 'dexie';import type{Evidence}from'../types';
export const db=new Dexie('ShakkhoArchive') as Dexie&{records:EntityTable<Evidence,'id'>};
db.version(1).stores({records:'id,eventId,updatedAt,integrityHash'});
