

import { Label } from '@/components/ui/label';
import { DisplayQnANs } from '@/components/ui/displayquestion';
import { AddingQuestion } from '@/components/ui/qnadd';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
  export function QnAns() {
 return <div>
  <Navbar></Navbar>
  <AddingQuestion></AddingQuestion>
  <DisplayQnANs></DisplayQnANs>
 </div>
  }
  