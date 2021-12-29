import * as React from "react"
import { Link } from "gatsby"
import "./customOrder.css"

export function CustomOrder() {
  return (
    <Link 
    aria-label={'Custom Order'}
    to="/contact"
    className="module-border-wrap" >
        <div className="module">Custom Order</div>
    </Link>
    
  )
}
