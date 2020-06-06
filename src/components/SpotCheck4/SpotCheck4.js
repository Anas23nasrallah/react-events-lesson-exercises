import React, { Component } from 'react';
import Quote from './Quote'

class SpotCheck3 extends Component {

    constructor() {
        super()
        this.state = {
            quotes: [
                { id: "3bf00g", text: "Friends are like butter, always wrapped up in their own thing", likes: 24 },
                { id: "50xx11", text: "If you're going to walk in the rain, at least make sure it's raining", likes: 82 },
                { id: "50ggr2", text: "Don't stop climbing the mountain. Instead, keep climbing the mountain.", likes: 33 }
            ]
        }
    }

    likeQuote = quoteID => {
        let currentQuotes = [...this.state.quotes]
        currentQuotes.find(q => q.id === quoteID).likes++

        this.setState({
            quotes: currentQuotes
        })
    }

    //Load instances of `Quote` instead of rendering a `div`, and make sure to pass the correct props: 
    //a quote object and the `likeQuote` method

    render() {
        return (
            (
                <div>
                    {this.state.quotes.map(q => {
                        return <div className="quotes">
                            <Quote quote={q} likeQuote={this.likeQuote} /> {/* pass both the quote *and* the likeQuote method to each child */}
                        </div>
                    })}
                </div>
            )

        )
    }
}

export default SpotCheck3;
