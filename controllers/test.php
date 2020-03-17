<?php

$PERSON = [
  "name" => "Juan Carlos Moreno Martínez",
  "document" => "10101010",
  "birth_place" => "Bogotá, Colombia",
  "birth_day" => "1975 02 18",
  "age" => "45",
  "details" => [
    "institution" => [
      "name" => "Rappi",
      "position" => "desarrollador",
      "hours" => "Diurna",
      "wage" => "$8.000.000"
    ]
  ],
  "family" => [
    [
      "name" => "Juan Moreno Quintero",
      "document" => "2020220",
      "birth_place" => "Bogotá, Colombia",
      "birth_day" => "2005 02 18",
      "age" => "18",
      "details" => [
        "institution" => [
          "name" => "",
          "type" => "",
          "hours" => "",
          "course" => ""
        ]
      ]
    ],
    [
      "name" => "Sara Moreno Quintero",
      "document" => "30030303",
      "birth_place" => "Bogotá, Colombia",
      "birth_day" => "2015 02 18",
      "age" => "5",
      "details" => [
        "diseases" => [
          [
            "name" => "COVID",
            "date" => "2020 02 14"
          ]
        ]
      ]
    ]
  ]
];

$FAMILY = [
  "address" => "Calle 94 #23-57",
  "phone" => "3215689",
  "type" => "Casa",
  "income" => "$15.000.000",
  "members" => [
    [
      "name" => "Juan Carlos Moreno Martínez",
      "document" => "10101010",
      "birth_place" => "Bogotá, Colombia",
      "birth_day" => "1975 18 02",
      "details" => [
        "institution" => [
          "name" => "Rappi",
          "position" => "desarrollador",
          "hours" => "Diurna",
          "wage" => "$8.000.000"
        ]
      ]
    ],
    [
      "name" => "Juan Moreno Quintero",
      "document" => "2020220",
      "birth_place" => "Bogotá, Colombia",
      "birth_day" => "2005 02 18",
      "age" => "18",
      "details" => [
        "institution" => [
          "name" => "Colegio Mayor",
          "type" => "Bachillerato",
          "hours" => "Diurna",
          "course" => "11"
        ]
      ]
    ],
    [
      "name" => "Sara Moreno Quintero",
      "document" => "30030303",
      "birth_place" => "Bogotá, Colombia",
      "birth_day" => "2015 02 18",
      "age" => "5",
      "details" => [
        "institution" => [
          "name" => "Pequeñas sonrisas",
          "course" => "Guarderia"
        ],
        "diseases" => [
          [
            "name" => "COVID",
            "date" => "2020 02 14"
          ]
        ]
      ]
    ]
  ]
];

$NEIGHBORHOOD = [
  "name" => "Chapinero",
  "area" => "Centro",
  "type" => "Residencial",
  "stratum" => "2",
  "institutions" => [
    [
      "name" => "One",
      "activity" => "privada"
    ],
    [
      "name" => "Claro",
      "activity" => "privada"
    ],
    [
      "name" => "Otra más",
      "activity" => "privada"
    ]
  ],
  "routes" => [
    ["name" => "C24 Narnia"],
    ["name" => "K18 Mordor"],
    ["name" => "T12 Un lugar muy muy lejano"]
  ]
];

$INSTITUTION =  [
  "name" => "Rappi",
  "neighborhood" => [
    "name" => "Chapinero",
    "area" => "Centro",
    "type" => "Residencial",
    "stratum" => "2",
  ],
  "activity" => "Privada"
];
