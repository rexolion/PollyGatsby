import React from "react"
import "./footer.css"

const Footer = () => (
  <footer class="Footer">
    <div class="Footer-container">
      <div class="Footer-left">
        <div class="Footer-text-container">
          <div class="Logo">Basement</div>
          <p class="Footer-para">
            This footer really make you fuckin' happy right now
          </p>
        </div>
      </div>
      <div class="Footer-right row">
        <div class="Footer-columns">
          <ul class="column">
            <li class="column-item Footer-heading_md">PRODUCT</li>
            <li class="column-item">Plans</li>
            <li class="column-item">App Directory</li>
            <li class="column-item">About us</li>
            <li class="column-item">Privacy</li>
          </ul>
          <ul class="column">
            <li class="column-item Footer-heading_md">RESOURCES</li>
            <li class="column-item">Help</li>
            <li class="column-item">FAQs</li>
            <li class="column-item">Product Hunt</li>
          </ul>
          <ul class="column">
            <li class="column-item Footer-heading_md">CONTACT</li>
            <li class="column-item">Email us</li>
            <li class="column-item">Chat on Slack</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
