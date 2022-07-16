import { useState } from "react"

const AddAmount = ({ onAdd }) => {
    let [subtotal, setSubtotal] = useState('')
    let [percent, setPercent] = useState('')
    let [tipAmount, setTipAmount] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()


        // Need Subtotal & Percent OR Tip to accept
        // and calculate
        // CANNOT ACCEPT:
            // Sub is blank
            // Sub is filled, but percent AND tip are blank
            // All fields are filled
        if((!subtotal) || (subtotal && percent && tipAmount) || (subtotal && !percent && !tipAmount)) {
            alert('Invalid input: Please make sure Subtotal is filled AND either Percent and Tip Amount are filled. Form will not accept if all fields are filled.')
            return
        }

        // Sub is filled
        if (subtotal) {
            subtotal = parseFloat(subtotal).toFixed(2);
            // Sub and percent is filled
            if (percent && !tipAmount) {
                percent = parseInt(percent)
                tipAmount = (parseFloat(subtotal * (percent / 100))).toFixed(2)
            }
            // Sub and tip amount is filled
            else if (!percent && tipAmount) {
                tipAmount = parseFloat(tipAmount).toFixed(2)
                percent = Math.round(tipAmount / subtotal * 100)

            }
            //console.log(`adding ${subtotal} and ${tipAmount}`)
            let total = parseFloat(subtotal) + parseFloat(tipAmount)
            onAdd({ subtotal, percent, tipAmount, total })

            setSubtotal('')
            setPercent('')
            setTipAmount('')
        }
      }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="">
          <label></label>
         $ <input
            type='text'
            placeholder='Subtotal *'
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value)}/>
      </div>
      <div className="">
          <label></label>
          <input
            type='text'
            placeholder='Percent Tip'
            value={percent}
            onChange={(e) => setPercent(e.target.value)}/> %
      </div>
      <div className="">
          <label></label>
          $ <input
            type='text'
            placeholder='Tip Amount'
            value={tipAmount}
            onChange={(e) => setTipAmount(e.target.value)}/>
      </div>

      <input type='submit' value='Calculate'/>
    </form>
  )
  
}
export default AddAmount
