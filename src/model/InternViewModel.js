/**
 * @file InternViewModel 
 */


 /**
  * @class InterviewViewModel
  */
 export default class InternViewModel {

    constructor(name, description, team, imgSrc)
    {
        this._name = name;
        this._description = description;
        this._team = team;
        this._imgSrc = imgSrc;
    }

    get Name(){
        return this._name;
    }

    get Description(){
        return this._description;
    }

    get Team(){ return this._team;}

    get ImgSource() { return this._imgSrc;}
    
 }