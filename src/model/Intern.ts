
/**
 * @interface Intern
 */
interface IIntern {
    /**
     * Name of the intern
     */
    Name:string,
    /**
     * Any additional information about the intern
     */
    Description:string,
    /**
     * A url on the open internet
     */
    ImgSource:string,
    /**
     * The team the intern considers themselves to be in.
     */
    Team:string,
    /**
     * The end date of the intern's internship 
     */
    EndDate:Date

}


class Intern implements IIntern {
    
    Name: string;
    Description: string;
    ImgSource: string;
    Team: string;
    EndDate: Date;
    constructor(name:string, description:string,team:string,img:string,endDate:Date){
        this.Name = name;
        this.Description = description;
        this.Team = team;
        this.ImgSource = img;
        this.EndDate = endDate;

    }
    

}

export type { IIntern  };
export {Intern };