var svt = 
      {
        "id": 0,
        "Name": "name",
        "Class": "",
        "Attack": "",
        "HP": "",
        "NPgain": 
        [
          "attack": "",
          "defence": "",
        ],
        "Deck": 
        [
          {"Quick": 2},
          {"Arts": 2},
          {"Buster": 1},
          {"Extra": 1},
          {"NP": 0}
        ],
        "StarWeight": "",
        "StarRate": 1,
        "DeathRate": 1,
        "Attribute": "",
        "Skills": 
        [
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]},
              {"effect2": [0,0,0,0,0,0,0,0,0,0]}
            ],
          },
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]},
              {"effect2": [0,0,0,0,0,0,0,0,0,0]}
            ]
          }, 
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]},
              {"effect2": [0,0,0,0,0,0,0,0,0,0]}
            ]
          },
        ], 
        "PassiveSkills": 
        [
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]}
            ]
          },
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]}
            ]
          }, 
          {
            "Name": 0,
            "Description": 0,
            "SkillEffects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0]}
            ]
          },
        ],
        "NoblePhantasm":
        [
            "Name": 0,
            "Description": 0,
            "CardType": 0,
            "Effects": 
            [
              {"effect1": [0,0,0,0,0,0,0,0,0,0],
              "Scaling": ""}
            ]          
        ]
      }

//console.log(svt);
      function printServant(svtData){
        $("#svt").empty().append(svtData.Name);
      };

printServant(svt);