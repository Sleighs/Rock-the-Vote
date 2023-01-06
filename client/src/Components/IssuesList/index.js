import React, { useContext, useEffect, useState } from 'react'
import { IssueContext } from '../../Contexts/IssueContext'
import { UserContext } from '../../Contexts/UserContext'
import Issue from '../Issue'
import './style.css'

export default function IssuesList() {
  const { allIssues, getAllIssues } = useContext(IssueContext)

  var num = 0;
  useEffect(() => {
    getAllIssues();
    num++;
  }, [num])

  return (
    <div className="issue-list__container">
      {allIssues && 
        allIssues.map((item, index) => 
          <Issue item={item} index={index}/>
        )
      }
    </div>
  )
}
