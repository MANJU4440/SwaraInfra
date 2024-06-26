import React from 'react';
import mortarImage from '../assets/home/mortar.jpg';
import safetyImage from '../assets/home/safty.jpg';
import homeImage from '../assets/home/home2.png';
import personalizedImage from '../assets/home/personalized.jpeg.jpg';
import '../stylesheet/home/mainhome.css'; // Import CSS file


class MainHome extends React.Component {
    render() {
        return (
            <body className='body'>
            <section className="container">
                <h1 id="home">Our <span style={{ color: 'blue' }}>Homes</span></h1>

                <div className="contentHome">
                    <div className="text-container">
                        <h1>More Than Bricks and Mortar: </h1>
                        <p>Why Home is a Feeling
                            We all know the saying, "Home is where the heart is." But what exactly does that mean? A house is a
                            physical structure, made of bricks and mortar, wood and paint. But a home? A home transcends the
                            physical. It's a feeling, an emotion that resonates deep within us.
                        </p>
                    </div>
                    <div className="image-containerHome">
                        <img src={mortarImage} alt="image" />
                    </div>
                </div>

                <div className="contentHome">
                    <div className="text-container">
                        <h1>Comfort and Safety:</h1>
                        <p>The Foundation of Home
                            At its core, home provides a sense of comfort and safety. It's a refuge from the outside world, a place
                            where we can relax, recharge, and be ourselves. It's the familiar creak of the floorboards, the worn
                            armchair that perfectly molds to our shape, the scent of freshly baked cookies wafting from the kitchen.
                            These seemingly mundane details weave a tapestry of comfort that makes us feel safe and secure.
                            Belonging and Connection: The Heart of Home
                            Home is more than just a physical space; it's a place where we
                            connect with loved ones. It's the laughter shared over dinner
                            tables, the stories whispered in hushed tones at bedtime, the
                            warm embrace after a long day. It's the feeling of belonging,
                            of being part of something bigger than ourselves. These connections are the
                            heart of home, the invisible threads that bind us together.
                        </p>
                    </div>
                    <div className="image-containerHome">
                        <img src={safetyImage} alt="image" />
                    </div>
                </div>

                <div className="contentHome">
                    <div className="text-container">
                        <h1>Memories and Nostalgia:</h1>
                        <p>The Soul of Home
                            The walls of our homes hold memories, both big and small. They echo
                            with the sounds of birthday parties and holiday gatherings. They bear
                            witness to life's milestones, the joys and sorrows we share with those closest to us. These memories
                            become the soul of our home, a treasure trove of experiences that shape who we are. They create a sense
                            of nostalgia,
                            a longing for simpler times, and a reminder of the love that has filled this space.
                        </p>
                    </div>
                    <div className="image-containerHome">
                        <img src={homeImage} alt="image" />
                    </div>
                </div>

                <div className="contentHome">
                    <div className="text-container">
                        <h1>Personalization and Expression:</h1>
                        <p> The Spirit of Home
                            Our homes are a reflection of ourselves, a canvas on which we express our unique personalities. Through
                            the furniture we choose, the colors we paint the walls, the trinkets we collect on our travels, we imbue
                            our homes with our spirit. These personal touches create a sense of ownership and pride, making our home
                            a space that is truly our own.
                            Home is a Journey, Not a Destination
                        </p>
                    </div>
                    <div className="image-containerHome">
                        <img src={personalizedImage} alt="image" />
                    </div>
                </div>

                <div className="contentlast">
                    <p>Home isn't a static place; it's a journey that evolves with us. As we grow and change, so too does our
                        concept of home. It may be the house we grew up in, the apartment we shared with college friends, or the
                        cozy cottage we built in retirement. No matter the physical structure, the essence of home remains the
                        same: a place where we can be ourselves, connect with loved ones, and create lasting memories.
                        So, the next time you step through the doorway of your house,
                        take a moment to appreciate the feeling of home that it evokes.
                        It's a feeling that goes beyond the physical, a reminder of the
                        love, comfort, and security that truly make a home.</p>
                </div>
            </section>
            </body>
        );
    }
}

export default MainHome;