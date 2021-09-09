export interface Game {
    _id: string;

    type: string;
  
    name: string;
  
    steam_appid: number;
  
    required_age?: number;
  
    is_free?: boolean;
  
    controller_support?: string;

    detailed_description?: string;
  
    about_the_game?: string;
  
    short_description?: string;
  
    supported_languages?: string;
  
    header_image?: string;
  
    website?: string;
  
    legal_notice?: string;

    developers?: Array<string>;
  
    publishers?: Array<string>;

    _v?: number;
    
}