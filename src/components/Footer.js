import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
     
    <FooterContainer className="main-footer" id="Footer">
        <div className="middle-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                      
                        <section class="mb-4">

                        
                            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                    

                            <div class="row">

                            
                                <div class="col-md-9 mb-md-0 mb-5">
                                    <form id="contact-form" name="contact-form" >

                                        <div class="row">

                                        
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="name" name="name" class="form-control"/>
                                                    <label for="name" class="">Your name</label>
                                                </div>
                                            </div>
                                        
                                            <div class="col-md-6">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="email" name="email" class="form-control"/>
                                                    <label for="email" class="">Your email</label>
                                                </div>
                                            </div>
                                        

                                        </div>
                                    
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                                    <label for="subject" class="">Subject</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row">

                                            
                                            <div class="col-md-12">

                                                <div class="md-form">
                                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                                    <label for="message">Your message</label>
                                                </div>

                                            </div>
                                        </div>
                                    

                                    </form>
                                </div>
                                
                                

                            </div>

                        </section>


                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem, ipsum dolor.</h4>    
                        <ul className="list-unstyled">
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                        </ul>

                    </div><div className="col-md-3 col-sm-6">
                        <h4>Lorem, ipsum dolor.</h4>    
                        <ul className="list-unstyled">
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                            <li><a href="/"> Lorem, ipsum.</a></li>
                        </ul>

                    </div><div className="col-md-3 col-sm-6">
                        <h4>Socials</h4>    
                        <ul className="list-unstyled">
                            <li> <a href="https://github.com/snk-99"> Github</a></li>
                            <li><a href="https://www.linkedin.com/in/samuel-kahura-9aa772204/"> linkedin</a></li>
                           
                        </ul>

                    </div>

                    <div className="footerbottom">
                        <p className="text-xs-center">
                        &copy;{new Date().getFullYear()}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </FooterContainer>
    
    )
}

export default Footer


const FooterContainer = styled.footer`
.middle-footer {
    background: var(--DarkSlateGray);
    padding-top: 8px;
    color: var(--white);
}

.footerbottom{
    padding-top: 1px;
    padding-bottom: 1px;
}

ul li a {
    color:var(--white);
}
ul li a:hover{
    color:var(--grey);
}
.footerbottom{
    text-align:center
}
 
`;
