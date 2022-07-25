import React from 'react'
import codeDocImg from '../img/code-doc.png';

export default function Project({ projectName, desc, tools, images, link }) {
    const splashImage = images[0];
    const openLink = () => {
        window.open(link, '_blank')
    }
    return (
        <div className="col-md-4" >

            <div className="work-box">
                <a href={`${process.env.PUBLIC_URL}/images/${splashImage}`} data-lightbox="gallery-vmarine">
                    <div className="work-img">
                        <img src={`${process.env.PUBLIC_URL}/images/${splashImage}`} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2 className="w-title">{projectName}</h2>
                                <div className="w-more">
                                    <span className="w-ctegory">
                                        {tools.join(", ")}
                                    </span>
                                    <br />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="w-like">
                                    <span className="ion-ios-plus-outline"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                {images.map((image) => {
                    return (
                        <a
                            href={`${process.env.PUBLIC_URL}/images/${image}`}
                            data-lightbox="gallery-vmarine"
                            style={{ display: "none" }}
                        >
                            jsx-a11y/anchor-has-content warning
                        </a>)
                })}
                <button onClick={openLink} className="btn btn-block btn-primary">Visit</button>

            </div>
        </div>
    )
}
