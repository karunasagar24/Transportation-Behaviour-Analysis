import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
    <div className="intro">
        <h2>Introduction</h2>
        <div className="prompt">
          <p>In this project we aimed to study the transport behavior of Varanasi city public transport and how local people use the means of 
          public transport for their routine travel to their working and to public places and have 
          analyzed and gave out the conclusion for the same of how to improve the transit behavior more effectively and efficiently.    
          For the same we have carried out the survey of local varanasi netizens and found out the usage of various transport facilities 
          varying with their age index and gender more precisely.                        
          And then we have collected data of various objectives like religious structures 
          and residential plotting to analyze it with our survey collected to plot our analyses 
          and data on a website to assist in further uses of transportation patterns.
          </p>
        </div>
        </div>
      <div className="about">
        <h2> A Glance at Varanasi</h2>
        <div className="prompt">
          <p>Since from the ages , be it a religious aspect or to being a place for good revenue generation or for other 
          domains of life this city has always attracted a attention of world relating to the first teaching of buddha or to hindu fiety shiva .
          Situated on the banks of holy river Ganga it is connected to whole nortern plains and valleys of uttaranchal and himalayas.<br/>
          Being a chherfull and a place full of life as said by many it has always created a glory of its own whether in past or in present 
          and we hope that it will continue to maintain its legacy.
          As it has been a heart of religion and culture so many foreign travellers and pilgrims came here in search of their question and 
          curiosity ,mostly by means of water i.e, river and sometimes by land and being on bank the tiver ganga worked as a boon for logistics 
          and transportation in history of banaras , but today it has dveloped several other means of transport varying from air to land and rail 
          etc, but ghe question which gets its beans are what about the local transit of banaras what about the netizens how do they carry their
          daily chores and how they connect themselves to this city through transportation and if we sum our dicussion here then what about the
          complication they face and how or more precisely what could be a option to catch themself with better things.
          For the same purpose we have carried out a survey in banaras and prepared a report on the same and this report has served as a bone of 
          contention between the availabilty of other datas like Ropeway planning , bus stops availabilty , availability of lands and residential 
          buildings and other relevant attributs which in a way or other effects our tranportation system and behaviour of which we did a study 
          and concluded a result.
          </p>
        </div>
        </div>
          <div className="skills">
            <h2> Population And Tourism</h2>
            <ol className="list">
              <li className="item">
                <h3> Population </h3>
                  <p className="para1">
                  According to the 2011 census, Varanasi district has a population of 3,676,841.This gives it a ranking of 
                    75th in India (out of a total of 640). The district has a population density of 2,399 inhabitants per square kilometre 
                    (6,210/sq mi). Its population growth rate over the decade 2001-2011 was 17.32%
                  </p>
              </li>
              <li className="item">
                <h3>Tourism in Varanasi</h3>
                  <p className="para1">
                  As the data suggests that the tourism has also accelerated within the provided timeframe and so it has indirectly 
                  affected the transportation conditions of varanasi whether private or public.
                  </p>
                  <table className="para1">
                    <tr>
                      <th>Year</th>
                      <th><a style={{ marginLeft: '.5rem' }}></a>International</th>
                      <th><a style={{ marginLeft: '.5rem' }}></a>Domestic</th>
                      <th><a style={{ marginLeft: '2rem' }}></a>Total</th>
                    </tr>
                    <tr>
                      <td>2013</td>
                      <td><a style={{ marginLeft: '2rem' }}>285,252</a></td>
                      <td><a style={{ marginLeft: '.3rem' }}></a>4966,161</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>5,251,413</td>
                    </tr>
                    <tr>
                      <td>2014</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>287,761</td>
                      <td>5,202,236</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>5,489,997</td>
                    </tr>
                    <tr>
                      <td>2015</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>302,370</td>
                      <td>5,413,927</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>5,716,297</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>312,519</td>
                      <td>5,600,146</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>5,912,665</td>
                    </tr>
                    <tr>
                      <td>2017</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>334,708</td>
                      <td>5,947,355</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>6,282,063</td>
                    </tr>
                    <tr>
                      <td>2018</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>348,970</td>
                      <td>6,095,890</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>6,444,860</td>
                    </tr>
                    <tr>
                      <td>2019</td>
                      <td><a style={{ marginLeft: '2rem' }}></a>350,000</td>
                      <td>6,447,775</td>
                      <td><a style={{ marginLeft: '.5rem' }}></a>6,797,775</td>
                    </tr>
                  </table>
              </li>
              <p className="para1">From the given data of polulation and tourists, we see the rise of polulation 
              living and coming to Varanasi. Which results into various transportation challanges here.</p>

            </ol>
          </div>
      </div>
  );
}
export default Home;