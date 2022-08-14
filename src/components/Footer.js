import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap'
export class Footer extends Component {
  render() {
    return (
        <footer className='flex justify-content-center'>
            <Button variant="outline-success" href="https://github.com/BenHuf">GitHub</Button>
            <Button variant="outline-success" href="https://www.linkedin.com/mwlite/in/benjamin-huffman-458809234">LinkedIn</Button>
            <Button variant="outline-success" href="https://twitter.com/fruity_juic">Twitter</Button>
        </footer>
    )
  }
}

export default Footer