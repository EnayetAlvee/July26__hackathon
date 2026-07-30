import{Suspense}from'react';
import{BrowserRouter,Route,Routes}from'react-router-dom';
import{Layout}from'./components';
import{About,ArchivePage,Contribute,EvidencePage,Home,Methodology,NotFound,StoryPage,Timeline,VerifyLab}from'./pages';
export default function App(){return <BrowserRouter><Layout><Suspense fallback={<p className="section">Loading archive…</p>}><Routes><Route path="/" element={<Home/>}/><Route path="/timeline" element={<Timeline/>}/><Route path="/story/:storyId" element={<StoryPage/>}/><Route path="/evidence/:id" element={<EvidencePage/>}/><Route path="/verify" element={<VerifyLab/>}/><Route path="/contribute" element={<Contribute/>}/><Route path="/archive" element={<ArchivePage/>}/><Route path="/methodology" element={<Methodology/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></Layout></BrowserRouter>}
