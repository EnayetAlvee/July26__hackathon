import{createContext,useContext,useEffect,useState,type ReactNode}from'react';
export type Lang='en'|'bn';
const copy={en:{home:'Home',timeline:'Timeline',verify:'Before You Share',contribute:'Contribute',archive:'Archive',methodology:'Methodology',about:'About',explore:'Explore the July Story',passport:'Check an Evidence Passport',demo:'Curated demo content',source:'View evidence',story:'Read story',integrity:'Integrity fingerprint',warning:'An integrity fingerprint can show whether this record changed after the fingerprint was created. It cannot prove that the original claim is factually true.'},bn:{home:'নীড়',timeline:'সময়রেখা',verify:'শেয়ার করার আগে',contribute:'অবদান',archive:'আর্কাইভ',methodology:'পদ্ধতি',about:'পরিচিতি',explore:'জুলাইয়ের গল্প দেখুন',passport:'এভিডেন্স পাসপোর্ট দেখুন',demo:'বাছাই করা প্রদর্শনী বিষয়বস্তু',source:'সাক্ষ্য দেখুন',story:'গল্প পড়ুন',integrity:'ইন্টেগ্রিটি ফিঙ্গারপ্রিন্ট',warning:'ইন্টেগ্রিটি ফিঙ্গারপ্রিন্ট তৈরির পর নথিটি বদলেছে কি না তা দেখাতে পারে। এটি মূল দাবিটি বাস্তব সত্য কি না প্রমাণ করতে পারে না।'}} as const;
type Key=keyof typeof copy.en;
const C=createContext({lang:'en' as Lang,setLang:(lang:Lang)=>{void lang},t:(k:Key)=>copy.en[k] as string});
export function LanguageProvider({children}:{children:ReactNode}){const[lang,setLang]=useState<Lang>(()=>localStorage.getItem('shakkho-language')==='bn'||(!localStorage.getItem('shakkho-language')&&navigator.language.startsWith('bn'))?'bn':'en');useEffect(()=>{localStorage.setItem('shakkho-language',lang);document.documentElement.lang=lang},[lang]);return <C.Provider value={{lang,setLang,t:k=>copy[lang][k]}}>{children}</C.Provider>}
export const useLanguage=()=>useContext(C);
export function local<T extends{en:string;bn:string}>(x:T,l:Lang){return x[l]}
export const translationKeys=Object.keys(copy.en);
export const translations=copy;
