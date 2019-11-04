import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushiArray)
  return (
    <Fragment>
      <div className="belt">
        {
         props.sushiArray.map(sushi => <Sushi {...sushi} handleClick={props.handleClick}
                                                         eaten={props.eaten}/>)
        }
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer