import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <section id="about">
        {/* <!-- About 01 --> */}
        <div id="about-01">
          <div class="content-box-lg">
            <div class="container">
              <div class="row">
                {/* <!-- About Left Side --> */}
                <div class="col-md-6">
                  <div id="about-left">
                    <div class="vertical-heading">
                      <h5>Qui sont les Comores</h5>
                      <h2>
                        Une <strong>histoire</strong>
                        <br />
                        apropos des Comores
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <!-- About Right Side --> */}
                <div class="col-md-6">
                  <div id="about-right">
                    <p>
                      Les comores est un pays africain formé de trois iles qui
                      se trouve dans l'Ocean Indien entre le Canal de Mozambique
                      et Madagascar. Ils ont pris leur independance le 6 juillet
                      1975.
                    </p>
                    <p>
                      Les Comores est un pays musulman. Le peuple comorien parle
                      leur langue natale qui s'appelle le "shikomori" ou bien le
                      comorien. Il est un pays démocratique et est composé de 3
                      iles (Grande-comore,Anjouan et Moheli).
                    </p>
                  </div>
                </div>
              </div>
              {/*  <!-- About 01 Ends --> */}
              <div class="row">
                {/* <!-- Ngazidja --> */}
                <div class="col-md-4">
                  <div class="ngazidja">
                    <div class="about-comore">
                      <h3> Grande-comore </h3>
                      <p>
                        Grande Comore (ou Ngazidja en shikomor) est un État
                        fédéré de l'Union des Comores. C'est la plus peuplée et
                        la plus grande des îles de l'archipel des Comores. Elle
                        a pour capitale Moroni, qui est également la capitale
                        fédérale de l'Union des Comores. La population de Grande
                        Comore est d'environ 410 736 habitants en 2016.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Ndzouani --> */}
                <div class="col-md-4">
                  <div class="ndzouani">
                    <div class="about-comore">
                      <h3> Anjouan </h3>
                      <p>
                        Anjouan (Ndzuwani en shikomori ou Anjoane ou Johanna en
                        arabe حنزوان ḥunzuwān) est une île de l'archipel des
                        Comores située dans l'océan Indien, qui constitue un
                        État fédéré de l'Union des Comores. Sa capitale est
                        Mutsamudu et sa population est d'environ 327 382
                        habitants en 20171. Sa superficie est de 424 km2.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- Mwali --> */}
                <div class="col-md-4">
                  <div class="mwali">
                    <div class="about-comore">
                      <h3> Moheli </h3>
                      <p>
                        Mohéli (Mwali en shikomori) est à la fois un État fédéré
                        de l'Union des Comores et l'une des quatre principales
                        îles qui composent l'archipel des Comores, situé dans
                        l'océan Indien. C'est la plus petite et la plus
                        touristique des trois îles de l'Union des Comores. Sa
                        population était en 2015 d'environ 52 360 personnes et
                        sa capitale est Fomboni.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  <!-- About Bottom --> */}
            <div class="row">
              <div class="col-md-12">
                <div id="about-bottom">
                  <img
                    src="./images/drapeau-2.jpg"
                    alt="About Comoros"
                    class="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  <!-- Fin About 01 --> */}

        {/* <!-- About 02 --> */}
        <div id="about-02">
          <div class="content-box-md">
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <div class="about-item text-center">
                    <h3>Un paysage diversifié</h3>
                    <hr />
                    <p>
                      Les Comores sont un choix pour ceux qui sont à la
                      recherche de paysage coloré et diversifié. Nature
                      verdoyante, montagne volcanique, las et cascade sont
                      autant de découvertes que vous pourrez admirer durant
                      votre visite de l’île. Les écosystèmes terrestres des
                      Comores constituent une écorégion originale (des forêts
                      tropicales et subtropicales humides). Les Comores sont
                      parmi les plus grands producteurs de vanille et
                      d’ylang-ylang sur terre. C’est pourquoi on les appelle les
                      Iles parfumées.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="about-item text-center">
                    <h3>Des villes extraordinaires</h3>
                    <hr />
                    <p>
                      Les Comores abritent également de nombreuses villes très
                      surprenantes. Commencez votre visite par la découverte de
                      Mutsamudu. Cette dernière se démarque par son
                      architecture. Elle abrite de nombreuses maisons vieilles
                      de plusieurs siècles, des mosquées ainsi que de charmantes
                      petites ruelles. Moroni est aussi une ville à ne pas
                      manquer pour l’accueil mais aussi pour les divers
                      monuments localisés dans la ville comme la fameuse Mosquée
                      Badjanani avec son architecture de pierre.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="about-item text-center">
                    <h3>Des plages époustouflantes</h3>
                    <hr />
                    <p>
                      Situées aux bords de l’océan indien, les Comores regorgent
                      à cet effet de nombreuses plages époustouflantes propices
                      aux farnientes et diverses activités nautiques. L’une des
                      plus recommandées est la plage de Chomoni avec ses sables
                      blancs et ses eaux limpides.La Grande-comore et Mohéli
                      hébergent d'époustouflantes plages de sable blanc.Les
                      plages comoriennes constituent parfois des lieux des
                      fetes.Elles constituent les lieux idéales de divetissement
                      pendant les vacances.
                    </p>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="about-item text-center">
                    <h3>La culture comorienne</h3>
                    <hr />
                    <p>
                      La culture constitue parimi les choses qui attire les
                      touristes. La société issue du mélange arabo-bantou du
                      XIIe siècle au XVe siècle forme les fondements de la
                      culture comorienne. Elle se focalise surtout dans les
                      Grands Mariages: on y trouve les danses traditionnelles,
                      les "Madjlises", les toirabs et le [shigoma, foumba
                      yadjio], musique traditionnelle de Moheli du mariage. la
                      population comorienne est classé en classe d'age (Hirimu
                      en Grande Gomore, Shikao à Mohéli) et en différents
                      mérites ou rituels accomplis .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>Ckeck out these EPIC Destionation!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="./images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
