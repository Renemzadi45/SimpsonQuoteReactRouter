import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            favorite: false
        }
    }
    render() {
        return(
            <figure className="QuoteCard">
                <img
                    src={this.props.image}
                    alt={this.props.character} />
                <figcaption>
                    <blockquote>{this.props.quote}</blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span
                        onClick={event => {
                            // const favUnfav = !this.state.favorite;
                            this.setState({favorite: !this.state.favorite})
                            console.log(this.state.favorite);
                        }}  
                        className={this.state.favorite ? "is-favorite" : ""}>&#9733;</span>
                    </p>
                </figcaption>
            </figure>
        );
    }
}



export default QuoteCard;