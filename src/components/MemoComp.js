import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo component')
  return (
    <div>
      Memo component
      {name}
    </div>
  )
}

export default React.memo(MemoComp)