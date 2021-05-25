import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

export default class Course extends Component {
    render() {
        return (
            <Paper className="Course">
                <div className="thumbnail row">
                    <img src={ `${this.props.image}` } alt="..." className="courseImg" />
                    <h1 className="page-header"> { this.props.title } </h1>
                    <p className="description"> { 
                    this.props.description.length > 168 ?
                        (
                          <div>
                            {`${this.props.description.substring(0, 168)}...`}<Link to={`/:${this.props.id}`}>გაგრძელება</Link>
                          </div>
                        ) :
                        <p>{this.props.description}</p>
                    } </p>
                    <h1 className="price">  { this.props.price } </h1>
                    <Link to={`/:${this.props.id}`} className="btn btn-primary">გაიგეთ მეტი</Link>
                </div>
            </Paper>
        );
    }    
}