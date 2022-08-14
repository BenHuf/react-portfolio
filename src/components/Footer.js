import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap'
export class Footer extends Component {
  render() {
    return (
        <footer className='flex justify-content-center'>
            <Button variant="outline-success">GitHub</Button>
            <Button variant="outline-success">LinkedIn</Button>
            <Button variant="outline-success">Twitter</Button>
        </footer>
    )
  }
}

export default Footer