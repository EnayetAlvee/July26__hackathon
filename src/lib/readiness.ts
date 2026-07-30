export const readinessWeights={original:20,date:10,location:10,publisher:15,corroboration:25,context:10,consent:10} as const;
export type ReadinessKey=keyof typeof readinessWeights;
export function readinessScore(checked:Partial<Record<ReadinessKey,boolean>>){return (Object.keys(readinessWeights) as ReadinessKey[]).reduce((n,k)=>n+(checked[k]?readinessWeights[k]:0),0)}
export function readinessLevel(score:number){if(score<40)return'Insufficient context';if(score<70)return'Needs more checking';if(score<90)return'Reasonably documented';return'Strong documentation trail'}
