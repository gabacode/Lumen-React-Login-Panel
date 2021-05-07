import React, { Component, Fragment } from "react";

export default class Helmet extends Component{
    render(){
        return(
            <Fragment>
                    <title>{this.props.pageTitle} | Lumen &amp; React</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="robots" content="all" />
                    
                    <meta name="author" content="gaba@totel.it" />
                    <meta name="description" content={this.props.description} />
                    
                    <meta property="og:site_name" content={this.props.siteName} key="ogsitename" />
                    <meta property="og:title" content={this.props.pageTitle} key="ogtitle" />
                    <meta property="og:description" content={this.props.description} key="ogdesc" />
                    <meta property="og:type" content={this.props.pageType} key="ogtype" />   
                    <meta property="og:url" content={this.props.currentURL} key="ogurl" />
                    <meta property="og:image" content={this.props.previewImage} key="ogimage" />
                    <meta property="og:image:alt" content={this.props.altImage} key="ogaltimg" />
            </Fragment>
        )
    }
}
