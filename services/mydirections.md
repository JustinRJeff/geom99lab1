# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?departure_time=now&destination=place_id:ChIJ1z7rG32U1EwRLieCSUXMCqc&&mode=bicycling&origin=place_id:ChIJq6p6ZumM1YkRwlenRs5y5SY&region=en&waypoints=via%3ALakefield%2CON&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq6p6ZumM1YkRwlenRs5y5SY",
         "types" : [ "establishment", "point_of_interest", "university" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ49mHl3C11EwRdQaBHCV2_iY",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ1z7rG32U1EwRLieCSUXMCqc",
         "types" : [ "premise" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 44.7452608,
               "lng" : -78.09802239999999
            },
            "southwest" : {
               "lat" : 44.3002104,
               "lng" : -78.7419474
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "97.5 km",
                  "value" : 97524
               },
               "duration" : {
                  "text" : "5 hours 5 mins",
                  "value" : 18270
               },
               "end_address" : "83 McFadden Rd, Harcourt, ON K0L 1A0, Canada",
               "end_location" : {
                  "lat" : 44.743871,
                  "lng" : -78.09802239999999
               },
               "start_address" : "200 Albert St S, Lindsay, ON K9V 5E6, Canada",
               "start_location" : {
                  "lat" : 44.3410364,
                  "lng" : -78.7416585
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ojsmGjfr_Nk@pA"
                     },
                     "start_location" : {
                        "lat" : 44.3410364,
                        "lng" : -78.7416585
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{ksmG|hr_N_@W"
                     },
                     "start_location" : {
                        "lat" : 44.34126,
                        "lng" : -78.7420679
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 461
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 72
                     },
                     "end_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAlbert St S\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{lsmGdhr_NBK@MAOE[SsAUyAEQEQM[MWQWsAc@ICWESAODQD{Bx@eA`@mC~@MF"
                     },
                     "start_location" : {
                        "lat" : 44.3414172,
                        "lng" : -78.7419474
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 977
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 192
                     },
                     "end_location" : {
                        "lat" : 44.347334,
                        "lng" : -78.72921819999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMary St W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKawartha Lakes County Rd 19\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Mary St W\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k`tmG`ar_Nk@qAK[Ww@YeB_@iCYkCWsAo@qEIo@_BoL{@kGu@mFKo@S_BIq@g@_ESiB"
                     },
                     "start_location" : {
                        "lat" : 44.3445376,
                        "lng" : -78.7408128
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 413
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 79
                     },
                     "end_location" : {
                        "lat" : 44.3508594,
                        "lng" : -78.7308383
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDuke St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yqtmGrxo_NkDlAcA\\kBl@iDnAcDlAWJ"
                     },
                     "start_location" : {
                        "lat" : 44.347334,
                        "lng" : -78.72921819999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 353
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 44.3518589,
                        "lng" : -78.726626
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDurham St E\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{gumGvbp_N{@yFQ}Aq@qE_@cCg@{C"
                     },
                     "start_location" : {
                        "lat" : 44.3508594,
                        "lng" : -78.7308383
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 306
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 44.3515912,
                        "lng" : -78.72316479999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eSimcoe St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cnumGlho_NPGBA@A?AAE?CSaBGa@AIEk@Ck@@q@@a@@m@HcBB_@Ba@@SBKEWJICSCMTSTW"
                     },
                     "start_location" : {
                        "lat" : 44.3518589,
                        "lng" : -78.726626
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "69 m",
                        "value" : 69
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 44.3516687,
                        "lng" : -78.72401479999999
                     },
                     "html_instructions" : "Sharp \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eVictoria Rail Trail\u003c/b\u003e",
                     "maneuver" : "turn-sharp-right",
                     "polyline" : {
                        "points" : "mlumGvrn_NI~@ANANATAN@R?N"
                     },
                     "start_location" : {
                        "lat" : 44.3515912,
                        "lng" : -78.72316479999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 319
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 44.348855,
                        "lng" : -78.7239397
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eVictoria Rail Trail\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}lumG`xn_N|@Hx@@dBCx@CH?t@AP@X@^Bt@?Z?ZAJ?L??A@A?ABO"
                     },
                     "start_location" : {
                        "lat" : 44.3516687,
                        "lng" : -78.72401479999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 296
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 44.349442,
                        "lng" : -78.72037229999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDobson St\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "k{tmGrwn_NBSHs@?O@IAWC_@E]UcBs@aFk@aEAI"
                     },
                     "start_location" : {
                        "lat" : 44.348855,
                        "lng" : -78.7239397
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "34.3 km",
                        "value" : 34279
                     },
                     "duration" : {
                        "text" : "1 hour 44 mins",
                        "value" : 6258
                     },
                     "end_location" : {
                        "lat" : 44.3090182,
                        "lng" : -78.3329842
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eTrans-Canada Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "__umGhan_NPS?EK{@WeB[gBGa@CO?I@MVy@Zw@rCwIJ]pBeGhBiGPg@P]Ni@Pk@b@wAvAmEVs@bAwCl@gBj@iBl@oBh@aBdAaDpFmPJYzCgJfDcKxDmLnBaGd@uAfDcKPi@bAuCFUd@uAb@qA?Cv@_C|AuERk@Pi@HWRk@Pi@DO\\gAPk@Pi@Lc@BG^}@Z_ANa@BGPk@lEwMzAwE@AdD_Kf@{Ab@oAv@_Cv@aChAkDVs@La@Pi@|AwEhAkDd@uAPi@Rk@v@_CPk@v@_Cv@_C|@oChBsFnBaGj@eBbA{CzAwE`BgFfBcFr@sBjAyD|BqH`DgKb@uAb@wAt@aCPk@b@uAxAyEhD{LdBiGr@cCp@cCtA}EhD{LbAoDxCmKJ_@Tw@Pk@b@wADMDQDKNk@`@yANk@^yAV_Ar@cCPk@fBgGb@}ALg@~@sDNm@ZmABKLm@jCwKhDqN|AoGl@gCjCyKl@gCn@gC|@sDzAoG|@uDzBkJ|@sDjA{ElAaFn@gC\\yA^yA^yA\\{An@eClAcFzD}O|BiJlAaF|@uD~@sDjCwK|AoGfAmEDSr@cCp@eCNm@D]b@kB~@kEtAgG^yANm@n@gCNk@Nm@?AXyALo@Jm@@EHi@Jm@b@oC@Kz@aH\\iFHiAJ{BBq@Dq@FoABeA@q@TqKLkHNkHJiEJyFJgEHiEHgE@q@DcBFuCL{FHgE@q@FkCHwEBq@FuCHiEFcD?gCAqC?EEo@OuCEq@KaBMoAMuBQsCWeEIcBQsCEq@KcBEo@Eq@Eq@UyDAKGq@KaBUsCEq@G}@K}AEo@Eq@YeE[eEKaBCUAWOgCAMIcAKqAIa@_AwDCMu@oBCGiAaBq@eAYa@s@eAYa@Yc@u@cAs@cAqEqGqEqGcCkDmOmTiBgCgGwIgBgCoAgBYa@mAeBu@cAmAgBiBgCm@{@yC_Fg@wAe@qAAAm@gCOm@Mm@W}AMs@O{AOyAAGKcBQsCEq@Eq@SsCWeEQaCe@mJE{@EqERqEBSXwC|@{EBGpAyDLYl@mAZo@fAyA^m@r@gAdBkCXc@Xc@jEyGrDwF~BoDVc@lAiBXa@T_@Zg@jAkBVa@r@gAVc@r@gATc@Ve@LW^s@Ra@@Eh@qAN_@BIPk@Pk@p@{B@Ev@yDDQd@mDJy@Fe@PaB`@aEHq@`@aEt@cHNaB`@uDH}@b@aEZqCFq@ZqCXqCj@sFDa@H_AVqCTsCDk@LyC@IBuEAmAGgDe@iIo@kK?IEg@Eq@Cq@KaBEq@KcBEq@Eo@IcBEq@Eq@Eo@g@{Im@mKWeEEq@UeEa@iHa@iHEq@UeEKaBKcBEq@Cq@Eq@AUCYMcBGo@AUKcBEq@Eq@IaBEq@g@{IOmC?EEwCAq@Aq@?ABsCDcBBq@Bq@ZcE?Af@sD@KdBwJjAyGjA{Gp@{DZeBtA_I~BuMJo@Jm@X}Ad@mCX}AJm@Lo@Fa@BKd@mCLm@Jo@d@kCd@mC~@iFh@}C^oBL{@Hc@VwCHkBFqA?O@s@BsBMcF?EY}Ce@gD_@iBGYy@_D_@qAUw@]kAQk@Mc@AGu@cCUu@g@}Ba@cBIe@Km@Y{AIo@AGOkACQGq@Go@MaBUkC?GEq@Cq@IqBEuAAq@MgEIyDAMQkHEmBM}DCq@As@Cq@Cg@?IEcBCq@Cq@Aq@Cq@Cq@Cu@GqCKgEEcB?KAe@Cq@Cq@GuCGcBAy@Ci@YkHKuCKyFEeBCcBCmAAUU}IGcBUmIa@eO_@aMC{@EyAMuC[{I]uJ_@qGI{AWmEYmEU}Du@_MMwBSoDMyBGeASyCCk@e@{GqAcU_A}OQwCcByYCgA?oAD_BFs@Dq@Dm@Hm@Lm@Tw@FSJ]Vy@Xo@Xo@P_@Xg@l@u@\\c@j@k@t@o@`A}@bA_Ap@u@l@w@d@w@Zo@Xw@\\iAT}@RwAJkAFwBBuA?CEkACUIcAQkAMm@?AMm@GW_@oAMc@Ys@qBsDyCuGqAiCmE}I_DoGkAcCc@_A{CuGEI{CiGSa@m@oA_AyBe@cBUy@WcA]iBM}@M}AM{BG_BCk@D_CF_C@Kb@eIPkBX{BNi@VaAVgAz@{BVe@Ve@p@aAb@e@f@k@h@c@n@i@|C{BhA}@rB_Bt@w@NQ`@k@NUXm@h@qAN]@CLc@VmAZmB@GHw@@c@@S@mBBgAB_A@e@D_A"
                     },
                     "start_location" : {
                        "lat" : 44.349442,
                        "lng" : -78.72037229999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 654
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 148
                     },
                     "end_location" : {
                        "lat" : 44.309453,
                        "lng" : -78.3248162
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMcDonnel St\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "kbmmGblb}MOs@EUEUC]CUAMAmBEeFIeFG}EE_FKeFC_F"
                     },
                     "start_location" : {
                        "lat" : 44.3090182,
                        "lng" : -78.3329842
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 215
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 44.3113818,
                        "lng" : -78.3249182
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBethune St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "aemmGby`}MyFPgC@"
                     },
                     "start_location" : {
                        "lat" : 44.309453,
                        "lng" : -78.3248162
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3868
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 849
                     },
                     "end_location" : {
                        "lat" : 44.3411884,
                        "lng" : -78.3059667
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRotary Greenway Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cqmmGvy`}M{@u@{@u@][][w@s@mCwCc@[u@i@]Qe@So@Qs@SaAQMEa@Qq@WaGqDuBqAiCuAqBkA{@g@eGmDsAu@cAo@q@m@m@o@OSS]Wi@M]]{ABY?MAMCQGQUcAKc@[qASw@Oa@M]_@y@]o@Wa@y@oAqC}Dw@y@SQOMo@_@]S_@OkAe@GCUO_@@wB@oCB}AB_EBA?qBFUAE?mDAqD@oA@mA?oIHsB@_@?_AAM?G?I@OBI@S?gAAm@CYAQE_AOy@Wq@Wq@]o@a@k@e@k@i@k@q@gBiCgAaBgHcKs@aAg@q@gAwA][OMIGGGEACEAC?EAG"
                     },
                     "start_location" : {
                        "lat" : 44.3113818,
                        "lng" : -78.3249182
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2436
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 590
                     },
                     "end_location" : {
                        "lat" : 44.3563215,
                        "lng" : -78.28863319999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eRotary Greenway Trail\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "mksmGhc}|MBSWKMCKAOGQKc@[kE{CoA}@gBmAuCoBs@g@qA}@i@_@yByAaAy@q@o@UWkAqAcAsA?AaA}AgC_E}@_B_@w@wA{CwCeHk@uACECCC?C@EBc@j@KLIDGF]X]VKDKDE?CAKc@WgA_@qBYaByAkGMe@CS?QBQNcBVoC?C?[AU?KCUIw@Go@C[Me@MWg@s@Ya@U[_@g@MOOKWQ_Ai@qAg@cCm@cAMEAgAKe@G_@CgAMkAO"
                     },
                     "start_location" : {
                        "lat" : 44.3411884,
                        "lng" : -78.3059667
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 44.356376,
                        "lng" : -78.2891448
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eNassau Mills Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jvmG|vy|M?\\AR?DGl@A?"
                     },
                     "start_location" : {
                        "lat" : 44.3563215,
                        "lng" : -78.28863319999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 483
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 106
                     },
                     "end_location" : {
                        "lat" : 44.360517,
                        "lng" : -78.28888959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNassau Mills Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kjvmGbzy|MECC?_Bk@}@MKAc@CA?a@Bi@T[Xa@d@g@ZMDGBIBO@K@M?Q?A?WEg@MmBi@c@McAW{@Q"
                     },
                     "start_location" : {
                        "lat" : 44.356376,
                        "lng" : -78.2891448
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "7.3 km",
                        "value" : 7335
                     },
                     "duration" : {
                        "text" : "23 mins",
                        "value" : 1403
                     },
                     "end_location" : {
                        "lat" : 44.4190324,
                        "lng" : -78.2676288
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRotary Greenway Trail\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gdwmGpxy|MDc@AMESEGEEGCGAG?I@MBqBPu@FqBNoADqA@{AIuAK{@GcASs@SaA[cCs@QEgLeDwFcBgA[oEqAaBe@_FuAWIeCy@w@Yk@WECa@W]W}AoAsAoAgAcAQUk@q@oAwB}@uAiByCy@sAiAmBiAkBcAaBiB}C[i@{AqCm@iAm@oAsAuC}AgDi@iAACgA_CO]Wg@Ue@[o@}@oBUe@k@mAMWIOUe@i@iA]e@ACY_@o@y@EEe@i@o@m@][a@]y@s@KIQOi@a@u@a@YQoAk@[Ma@MMGy@]eBm@iAa@c@O_A[c@Oa@OeBo@a@Qa@Oa@OcA_@m@UUIeBo@cAa@a@OcA_@QGOGeA_@_A]e@OaA]gBq@cA_@kDoAa@OQIuBu@mFqB]MkCcAYKkAa@a@O}Ak@mA]y@UwBk@_@KiCo@c@KGCYIc@K_AWg@OeAYa@KAAcCg@i@Kg@G]EYA_@Ag@?}@@aD@u@@iBBmD@{@@wB@yD@qC@cAD]BM@s@Js@LuEt@gEr@a@FmCb@c@Fe@He@JcAZ]NSHs@`@YPi@ZwAfAkAz@MJ_CfBYTi@`@sAbAGDu@`@SNMJKVMP[Z]d@Ub@Sb@GJWp@MXMTST]ZOLCB]PGD_@RC@CDAF?N"
                     },
                     "start_location" : {
                        "lat" : 44.360517,
                        "lng" : -78.28888959999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 354
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 44.421109,
                        "lng" : -78.2709387
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWater St\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "}qbnGtsu|M_@Xa@^g@h@WXSZORCBSZMZQb@Uh@IRMXQ`@s@fBg@nAe@tA"
                     },
                     "start_location" : {
                        "lat" : 44.4190324,
                        "lng" : -78.2676288
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 35
                     },
                     "end_location" : {
                        "lat" : 44.4227316,
                        "lng" : -78.2708475
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRegent St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}~bnGjhv|Ms@Ei@CoCEuAA"
                     },
                     "start_location" : {
                        "lat" : 44.421109,
                        "lng" : -78.2709387
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 107
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 44.4227814,
                        "lng" : -78.27219669999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAlbert St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "aicnGxgv|MG`E?VAr@"
                     },
                     "start_location" : {
                        "lat" : 44.4227316,
                        "lng" : -78.2708475
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.9 km",
                        "value" : 3887
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 749
                     },
                     "end_location" : {
                        "lat" : 44.4506427,
                        "lng" : -78.25056870000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eQueen St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 29\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow County Rd 29\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kicnGfpv|Mo@A}@C_CI_@Ay@Es@Ei@Ci@IWGKIKISSi@y@yAsBq@y@}@sA_B{B_B{B{@gA[a@q@}@g@q@i@u@GISWs@cA{B}CyAsBY_@QWGI{@mAg@o@o@o@a@[s@_@iA[cAEW?G?O@[Bw@JG@c@Hc@J}@PqAVy@NyEz@wCn@eAJW@S?m@Cw@KiA]mAu@uAcAUOg@YYKk@QeAI[AMAMAkBCIAy@Ie@MWKGEAAGCy@g@kBuAmBsAuByASMSQ_@W_@Ww@i@GE_Ak@}EeDaBoA}CwBuDgCGEwAcA[Y[[]a@QUQWS[Q[Q]O]M_@M_@Ma@EQGQOk@Ki@SmAUwBOoAG[Kc@G]CIIYAGGMIYISISUk@Wm@KWGQIWGSAEI[G[EYC]ASAKAg@?g@@G?e@?K?Y@W@Y@U@W"
                     },
                     "start_location" : {
                        "lat" : 44.4227814,
                        "lng" : -78.27219669999999
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "40.0 km",
                        "value" : 40017
                     },
                     "duration" : {
                        "text" : "2 hours 1 min",
                        "value" : 7237
                     },
                     "end_location" : {
                        "lat" : 44.7452608,
                        "lng" : -78.10198369999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eON-28 N\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "owhnG`ir|MSEUGMCmD{@k@UQKk@WWM_@Sa@SOIGCGEm@[e@UqAq@OIOIuCyAmAo@oE{BgCqAm@[cB{@AA]Qa@S_@Sa@Su@a@KEaAg@oBcAaAi@c@Ws@c@[UIGSQ[[A?o@q@c@i@}@kASW[_@OUiA{Ak@u@kBeC[_@s@cAKKk@u@e@m@k@q@Y]k@i@a@_@c@[g@]GE[SEAg@Ws@]oD{Aa@Qe@S}@_@eBu@iCeAi@W_@OiAa@]Mu@QQC_@E]Ec@Ae@Ck@@s@Dy@LaAPc@HmAXs@Ng@Hq@DcA?i@Em@Em@MSGEAc@Oc@Q]Oi@Wk@YwAy@gBaA{@e@_@So@_@QIeCuAoAq@cAi@{@a@CCa@O_@OA?m@Sk@QmA[s@QyA_@w@SiD{@{@SsA[eAQOCSCk@IaAIsAEC?k@AY?I?}@@y@BK@eAHgALm@L_@HMDeAXg@PUHw@XOFQDa@Na@Ne@P_A\\a@NOFyAh@kBt@a@NsAf@ODcA`@[LE@uAf@yAj@QHu@VA?yAh@g@RoBr@E@a@Pe@NmAb@u@XE@_A\\A?_@LuAh@k@Ro@TYJg@P_AR]FO@s@Dk@Ag@A]E[C_@Kq@UWKWKc@Wc@YQOOOe@e@_@e@Yc@GK[m@]u@[{@I]GSGYMi@SkAc@uCO_Aa@qCW{AIo@c@oCKo@Ik@?CKm@e@{Ck@qDAIIe@Ko@QcAQiAKo@Ko@E[OcAKm@O{@k@qDO}@Ga@}@uF{@gFU{AKo@Ie@AIo@wDSoAOu@UaAQo@AEK[Ma@KUACQ_@Qa@Q]OWS[IOCCW]SYSQUWYYCAYUe@[c@W]QECo@Uo@Sw@Sk@Og@Oa@KoA[wA_@_ASo@Qa@KSGOCiAY]Ky@QKEc@Ks@QOEmBc@}Bk@}A]YIc@KmBc@qBg@SEuA]oBc@iBc@wCq@e@KqCo@uBe@KCmAYeDu@qA[sA[mA[_Ci@kBg@a@KC?{EoAaEgAeAWeAYuCw@WG_HmBmBi@m@Qc@Ma@KkGgBGAgBi@}Ac@aGcBy@UkBg@uAa@UIi@Q_@Qq@]WMOIe@[k@a@s@i@a@[o@e@cAu@iA{@QOAAy@o@AA}@q@GEWSWQEEWSc@[CA]YGE_As@UQ_@WQMKKWQGEy@o@]Wa@[A?_@YKIQO_@YSOi@a@_@WIGSQ_@WyAiA_BmAw@m@e@_@}@q@UQWUYW][[[s@s@w@w@[[OOMM][UWEE_@_@c@c@q@o@QO[Ye@YIEMISKIEWK[K_@K_@Ia@IWCWAe@CS?M?C?W@W@O@C@O@[F[FWDIBi@L[HYFG@]HE@ODQDA@c@Je@J]J]HC@]HE@a@JUFo@Nk@La@LG@o@PgATGBa@JG@YHSFOD]LC@a@NIDa@PUJYLGD_@RWNID_@REBYPaAh@C@e@X_@Rs@`@a@VKDULi@Xm@Xa@Nc@N[JwAd@MD]Lg@NMDSHG@YLE@m@Va@R_@RCBc@Vc@Zm@h@k@f@SR]ZA@c@`@yBxBwDxDcAdAmAlAGFu@v@c@`@[\\WVEDWVCDWVSROL[\\IFSRQR_@^SROPKJIHQRIHSTKJORABEDSTABEFQVGJCDc@r@A@Yj@Q`@CBUf@MVMTINUf@Uf@QXKTYd@Ud@Yj@ABS`@Wd@a@x@Wb@EHUb@a@l@Y^QRSTKJONSPUPEDMHWP[PULUJSH_@Lc@LODSB[F[Dc@B]@W@Y?YAa@Ca@CQCOC_@IYIWGSISIUKYOQKECa@WWQYUOMOMACKKMMW[U[[c@We@We@Ue@ACSe@Qg@I[KYI[Mc@UmACKKm@k@_DSmAKo@Mm@AMIa@Ko@e@iC?CMm@W_BMm@CQG]e@mCKm@EUkAyGm@iDMw@Ie@e@mCMm@EWEWKo@Mm@UsAOy@Ko@Ko@Km@Ke@k@gDi@}C]mBKm@Ie@AIY}Ac@iCi@{CUsAY_BACIi@e@kCY_Bg@sCWyAa@}B}@gF_AgFk@cD_@qBm@gDMo@W}ACIUsAY}A[eBIg@aBeJqAkHGa@UkAUmAG_@e@kCUqAQcAMo@q@{DESk@}COy@Km@?A_@uBSeAAKIa@Y}A[kBI]Ow@Ie@ACKg@?AMi@Mg@K_@IUCGMa@M_@EKWm@[q@Yk@Yi@W_@IOMQMOIMY_@QSKMOOGGUUCCYWSQIG_@WGEWQUOIEa@SCCk@[o@]a@UGCWO?ASMIGKIKGIG?AOKUSQQ[[CEIIKMEGIIQSIKGMIIIMMSMSOYQ[Ua@CEQ]CGISIUEGOa@IUGSEKIUGUK_@CMGSGWIa@AEKg@CIGe@ESSiAIc@AKKm@Ko@QaAG]Km@W_BQ_AG]Ko@Ko@Km@Y_BAEIg@{@cFMy@Ia@AKIg@AGM{@Ge@Ge@Iu@Ec@AQAQC_@G{@Eq@Ag@ASA_@Cw@A_AA{@?aA?y@@}@?]?e@?KAk@?G?k@?EAUA{@KyBGw@Ek@Ee@ASE[AOIm@MaAOaAAEIi@EQE[YcB[mBcAgGESe@oCW}AW_BSiASoAe@mCSkAO}@ACUsAc@kCWyAq@{DG_@e@oCO}@WwAI[EYMo@U_AOq@Qq@ACOi@AEMa@ACI[Wu@Og@Qe@Ww@[s@Wo@ACc@_ASc@Q]c@y@CEa@s@OU]m@_@k@o@}@Yc@g@m@y@aAu@u@SUUUUSUU[WKIEEq@i@WSUQy@i@o@_@c@Ww@a@SKUKo@Yo@Wi@Qc@O[Ia@MWGUEa@Kc@I_@G[G[E[Eg@Ec@EKAYCI?YAc@CI?c@A{AEM?c@AmAE]?c@AaACmAEyACu@Cc@?yISwBE{@Cm@AuEKqCGYAY?m@Ac@?A?a@@c@@A?a@BM?U@I@YBC?c@DSBSBUDC?ODSBG@YFC?_@HE@[HC?[JC?}@XE@c@NWHIDKDSJa@PUJKFOHOHULKDYPEB_@TGBWRMHQLA@SN[TKHEDSPg@b@OPGDONMLUTEF[^QPIJ[^EBUZ[\\GFUV[^CBw@z@UZWXc@h@YXMLQNSROLOJED]TA@a@T]PA@[LE@YLGB[JE@_@Je@JC@]FOBSBWDK@YBI@O@S@O@_@@[?]AA?a@Cc@EIAYCc@EOASCc@EC?_@EC?_@EKAUCc@E[CGAc@Ec@EQCQAWCKAe@Ee@Ee@EqD[C?cAIc@Cu@GgFk@{AOuAOOCSAeAISAaBGu@@w@BeBLcBRM@eEl@aCZ{CZUBq@Fc@Fg@FaAJuBVkCb@aBLYB_BRw@Jc@DgANeALc@Fc@Dc@Fc@DeALi@FSBI@c@Dc@DE?kAL_BLc@BE@A?{AJM?}BJaCN[BE@c@@a@BA?gA@A?a@?gAAE?qEIU?}CMc@Cc@Cc@AgAEgAGc@Aa@Cc@Ac@Cc@C_CI_HYc@Ac@Cc@Aw@EOAc@AgAEyFUSAO?gBGC?c@Cc@Ce@Eo@EUEa@GIAYGSCq@QQEOEc@Ma@Mk@UWKa@OGCaAa@[M_@Ss@[oBw@cAYm@OUGWGw@O_AO}AKiAEyAEwACuBEaBCcACeAIyBYsBa@{EiAa@KWG{EmAeAW[IGCiBq@[S_@Ss@_@MIuBuAkBqA[U}AkASOk@]aBaA_@Qa@S_@QqAe@UGc@Ka@Mg@MeCo@A?gBc@QEOEc@KcAWIA_Dw@EAeAWa@Mc@KuGaBeAW}Cw@mEoAe@MyCeAoFkBSG{EeBa@OeBo@a@OqG}Ba@OgC_Aa@OiAa@kJsDkD_BWMwE{BoAi@c@M_AUy@McBMg@AYAI@gABC?]Bs@Fm@JIBg@LaAX_@LEB[NC@k@Xc@ZKH_@Vy@r@A@]Z[Zy@`AY^o@x@GFY`@QVGHSVe@d@OPi@f@]ZGFWN_@VKHu@`@s@\\MDa@NgBd@qAPi@De@Bo@@}@AaBM}@Q{A_@gA_@cA[SGo@SAA{@Ug@MYGMACA_@EIAiAIUAw@CcA?a@AU?UAk@Ey@Ku@Oy@UiAe@kAm@oAu@kAw@MIk@_@ECWOGCa@SOG]Ow@[CAeAa@_@MkAY{@Qa@IaIu@MAUE}@Q}Bo@kDsAiDoAu@YqAg@eC_AyAk@o@Uu@[cAa@GC_C_AmCcA{@]mAc@WKc@QuAg@uBy@i@S}Ak@}B}@k@Sa@QwBy@uBw@_A_@w@Wq@Wa@Qa@OqAg@SIeBo@uEeB{@[a@QwBy@OGcA_@a@OaBq@eBq@oBw@wBy@i@SsDsACAUIGCiAe@[KYKQIWIcBq@{B}@m@UkDqAa@Q}Ak@GCa@OEC[McA_@SIEAi@ScA_@_A]u@YQGMCKEICa@M{@SA?GCYG_@K[Iu@Qk@KqA[eBa@}Bi@UEWGSG]G_AWu@Uq@UCCaA]}@a@mAs@g@]UQe@[]YA?g@c@KKgBcB}BqCMQsAoB_@q@w@{ASe@Yo@MYa@aA"
                     },
                     "start_location" : {
                        "lat" : 44.4506427,
                        "lng" : -78.25056870000002
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 411
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 44.743871,
                        "lng" : -78.09802239999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eMcFadden Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{hbpGjhu{M\\[z@u@\\[\\[VUDE\\Y^Y^Yf@a@Eq@Go@AKCe@Aq@Cq@?EAk@Aa@?O?s@?MAc@Aq@?AAK"
                     },
                     "start_location" : {
                        "lat" : 44.7452608,
                        "lng" : -78.10198369999999
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 44.4227538,
                        "lng" : -78.271468
                     },
                     "step_index" : 20,
                     "step_interpolation" : 0.4598928452211936
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "ojsmGjfr_NkAx@DYq@yEg@wAgCeAqDbAsE`By@iA}AcIkBaNwHuk@eOhF{DxAmAwIgByNBKc@}H^uGb@mAOtB|@|@bFEzFB`@mBaCqRy@_JbMm`@da@_nAxZ{~@ri@_aBbg@c}A`a@kvAjv@}|Cbp@qnCjDe]jAug@hCupAa@}WsBm\\{D_l@wBsPaHwLy`AutAuGeMmAeFkByRcAmO]mY~AoKhDqItTu\\tKuPnFkJvC{ItDoXzEae@dDk]PgM}Ag[y@eNoCye@gEkt@yA_[h@eShU}rAdDcRjEm\\G{K_BuLwDgNoE{RiA}LiBoo@wG}cCeJydBgGseAHkHdB_JlG}IdFkFxBiF|@yIE{DmByJuYyl@{Ns\\qAiISgK~@}PxAoH|CiGdD_DpKqIzAaChCsKDgMg@gT]c[aKRwBkBaGcGwBwAkEkAcJaF}Z}QiBkCg@aDoBeIgJqN{F}CoUT}d@PgJkCwTeZsC}CqAgAmVyPcG{EqEeGiOyZmBfB{@b@gA_FeCgLj@wG[{EqDsFmHqCwDc@sDa@IdB{EcAgE~BgCKqGaBGmA}ERoJLiG{@qf@sNgP_GkGyFcHyKaPsX{Qi`@oFkHqG}E_YkK}]oM{e@yOsKmCqLYq[TaVtDsHfCsNnKsDnDwCfFmGnGgD|HmAdD}AIeFGGxEq@p@}DMwDQyAe@iE{FyM{QyIyLuDiEyEaAyFz@}S|CiLkFmH_@cJwFmb@_ZeD_FgBiHqAqIgBsEq@}JMmA}F}AwDmBw_@wRiLoGaFuFiJ}LqHwHs[yMsH?oLnAeGgBoOoIeIuDyR_FoHs@aJ\\oRlGiYnKuS|GkHu@gEiDqC{G}DyViFw\\yJ}k@_G{JkFkCeMaDqYaHon@yN_s@kRcWmHaHkEgNkKuKgIsRkOaMgLkEmAcD?aIdBgM|CqIfD}NpHoFhBoFbD{VxVuG|GqNnWgDhE}ChBaFx@qEYqHkEeDwFeBeHiGa^{H}c@w\\amBgQ_`AiGeLkI{FcF{DaEqGkC_JyDgUcEkX_@yTgAkR_Joi@aIgc@_G{OkNyQkPyIcMeB}c@aAuTMsG`AmHrCaH|EwGnHaJjIqHfBoJYwl@}E}~@jKuVvAc\\aAqc@cBeMsC{KeE_OkAaJWkNqCcOuE}MaJqJaEy`@yJm`@eM{_@sNkNsGaG_AwGXeFhB_GlFcJrJyCtAiG`AmG_@{FcBaFkAsHUuEw@qHaEoDmBaDmAkNkB}ToHyd@iQgd@}Pkx@yZmOwEaMqCaLyEuJmJwGaMpE_EfBuASsCIiGEcB"
         },
         "summary" : "Trans-Canada Trail and ON-28 N",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
