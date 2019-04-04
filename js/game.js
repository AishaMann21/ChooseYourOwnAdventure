// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "kpoppp.jpg",
    levels: {

        start: {
            message: "Wanna become KPOP's next BIG STAR?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "Kgroups",
                },

                {
                    text: "No",
                    nextLevel: "home",
                },
            ]
        },

        Kgroups: {
            background_image: "1_y_bts.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Which KPOP group would you like to be a part of?",
            choices: [
                {
                    text: "EXO",
                    nextLevel: "EXO1",
                },
                {
                    text: "BTS",
                    nextLevel: "BTS1"
                    
                }
            ]
        },

        home: {
            message: "What a bore...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    
        EXO1: {
            background_image: "exo.jpg",
            message: "You just got an audition! Sing for Chenyeol...",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "EXO2",
                },
                {
                    text:"No",
                    nextLevel: "No",
                }
            ]
           
    
       },
        BTS1: {
            background_image: "BTS.jpg",
            message: "You just got an audition! Sing for RM...",
            choices: [
                {
                    text: "Sing",
                    nextLevel: "BTS2",
                },
                
            ]
           
    
       },
        BTS2: {
            message: "What a beautiful voice! Wanna dance as well?",
            choices: [
                {
                    text: "Yes",
                    nextLevel: "BTS3",
                },
                {
                    text:"No",
                    nextLevel: "No",
                }
            ]
           
    
       },
        BTS3: {
            message: "YAAYYY! RM loved your voice and those were some fresh moves! Congrats!You just became the newest member of BTS!!",
            choices: [

                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
           
    
       },
       EXO2: {
            background_image: "cry.png",
            message: "WOw, you really suck at singing. Try again next time...or not",
            choices: [

                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
           
    
       },
       No: {
            message: "What a scaredy cat!",
            choices: [

                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
           
    
       },
   
    
   
    
   
    
   
    }   
};
