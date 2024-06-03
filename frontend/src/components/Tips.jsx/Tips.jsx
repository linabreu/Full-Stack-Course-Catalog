import React from 'react'

function Tips() 
{
  return (
    <div>
        <h2 className = "text-2xl font-bold mb-5 bold brand-font">Tips For Finding Your Classes</h2>
        <ul className = "list-disc mb-10">
            <li>Enter a class prefix and number combination to find those specific classes. For example, "MAT151" will return College Algebra/Functions classes.</li>
            <li>You can enter a course prefix/subject to show class offerings for the group of courses that begin with that prefix. Entering "BIO" will return all biology classes.</li>
            <li>Providing search terms like "emergency medical" will find classes that include those words in the title or descriptions. This type of search matches whole words only.</li>
            <li>By default, the search limits to "Open" classes for the selected semester.</li>
            <li>Please see the Registrar's Office for questions about enrolling in courses.</li>
        </ul>
    </div>
  )
}

export default Tips