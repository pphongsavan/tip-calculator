import { useState } from "react"

const AddAmount = ({ onAdd }) => {
    const [subtotal, setSubtotal] = useState('')
    const [percent, setPercent] = useState('')
    const [tipAmount, setTipAmount] = useState('')
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
            setSubtotal(parseFloat(subtotal).toFixed(2))
            // Sub and percent is filled
            if (percent && !tipAmount) {
                const newSubtotal = (parseInt(subtotal)).toFixed(2)
                const newPercent = (parseInt(percent))
                const newTipAmount = ((parseFloat(subtotal * (percent / 100))).toFixed(2))
                const newTotal = (parseFloat(subtotal) + parseFloat(newTipAmount)).toFixed(2)
                onAdd({ subtotal : newSubtotal, percent : newPercent, tipAmount : newTipAmount, total : newTotal })
            }
            // Sub and tip amount is filled
            else if (!percent && tipAmount) {
                const newSubtotal = (parseInt(subtotal)).toFixed(2)
                const newTipAmount = (parseFloat(tipAmount).toFixed(2))
                const newPercent = ((Math.round(tipAmount / subtotal * 100)))
                const newTotal = (parseFloat(subtotal) + parseFloat(newTipAmount)).toFixed(2)
                onAdd({ subtotal : newSubtotal, percent : newPercent, tipAmount : newTipAmount, total : newTotal })
                
            }
            setSubtotal('')
            setPercent('')
            setTipAmount('')
        }


      }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-row">
        <div className="col-md-6">
            <label htmlFor='subtotalInput'>Subtotal *</label>
           <input
              type='text'
              id='subtotalInput'
              className='form-control'
              placeholder='Subtotal *'
              value={subtotal}
              onChange={(e) => setSubtotal(e.target.value)}/>
        </div>
      </div>
      <div className="form-row">
          <div className="col-md-3">
              <label htmlFor='percentInput'>Percent Tip</label>
              <input
                type='text'
                id='percentInput'
                className='form-control'
                placeholder='Percent Tip'
                value={percent}
                onChange={(e) => setPercent(e.target.value)}/> 
          </div>
          <div className="col-md-3">
              <label htmlFor='tipAmountInput'>Tip Amount</label>
               <input
                type='text'
                id='tipAmountInput'
                className='form-control'
                placeholder='Tip Amount'
                value={tipAmount}
                onChange={(e) => setTipAmount(e.target.value)}/>
          </div>
        </div>



      <input 
        type='submit'
        className='btn btn-primary'
        value='Calculate'
        />
      

    </form>
  )
  
}
export default AddAmount
