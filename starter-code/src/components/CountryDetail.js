import React, { Component } from 'react';
import countries from '../countries';
import { Link } from 'react-router-dom';

class CountryDetail extends Component {
  render () {
    const {id} = this.props.match.params;
    const country = countries.find((item) => {
      return item.cca3 === id;
    })
    return (
      <div className="field">
        CountryDetail Page
        <p>{this.props.match.params.id}</p>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group country-list-class">
                {countries.map((country) => {
                  return <Link to={country.cca3} className="list-group-item list-group-item-action active" href={country.cca3}>{country.name.common}</Link>
                })}
              </div>
            </div>
            <div class="col-7">
              <h1>{country.name.common}</h1>
              <table class="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="capital-class">Capital</td>
                    <td>{country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {country.borders.map((item) => {
                          const country2 = countries.find((countryName) => {
                            return countryName.cca3 === item;
                          });
                          return <li><Link to={item}>{country2.name.common}</Link></li>
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryDetail;