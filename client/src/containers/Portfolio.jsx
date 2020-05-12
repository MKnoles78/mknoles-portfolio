import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                    <div class="card-header" id="headingOne">
                        <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            "Sup 'N' Sip"
                        </button>
                        </h2>
                    </div>
                
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="card-body">
                        <p>Have you ever looked at the food in your pantry and wondered what meals you could make with it? Stuck having to order takeout again because you do not know what meals you can make? Try the Sup n’ Sip app!
                            Sup n’ Sip is a browser application that takes in a number of food items and returns not just a list of meals that can be prepared with those food items, but also the recipes to follow for preparing those meals. It does the same thing for drinks.
                        </p><br></br>
                        <p>
                            Sup n' Sip is a web application that builds recipes based on food items the user enters into a form. It also does the same thing for 
                            drinks, so a user can cook an entire meal using the app. The site can be found here: 
                        </p>
                        <p>
                            <a href="https://nasakib.github.io/server-side-API-project/">Sup 'N' Sip</a>
                        </p>
                        <p>
                            <a href="https://github.com/MKnoles78/SupNSip">gitHub Repo</a>
                        </p>

                        </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            "collectBay"
                        </button>
                        </h2>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                        <p>
                            Have you ever wanted an all-in-one collector's site.  At collectBay you can log a number of collection options, enhance you collection with a link to eBay to search for items that fit your collections, or connect to the web through Google search engine and find the latest news around your favorite collectibles.
                        </p>
                        <p>
                            <a href="https://stormy-oasis-62272.herokuapp.com">collectBay</a>
                        </p>
                        <p>
                            <a href="https://github.com/MKnoles78/Collect_Bay">gitHub Repo</a>
                        </p>
                        </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-header" id="headingThree">
                        <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            "Heroku Burger Bar"
                        </button>
                        </h2>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div class="card-body">
                        <p>
                        Heroku-burger-bar is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured. Each burger in the waiting area also has a `Eat!` button. When the user clicks it, the burger will move to the right side of the page. Your app will store every burger in a database, whether devoured or not.
                        </p>
                        <p>
                        <a href="https://heroku-burger-bar.herokuapp.com">Heroku Burger Bar</a>
                        </p>
                        <p>
                        <a href="https://github.com/MKnoles78/Burger_Heroku">gitHub Repo</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div> 
            </div>
        );
    }
}

export default Portfolio;