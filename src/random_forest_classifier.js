var RandomForestClassifier = function () {

  var findMax = function (nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
      index = nums[i] > nums[index] ? i : index;
    }
    return index;
  };

  var trees = new Array();

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.829401254653931) {
      if (features[5] <= -1.5716671347618103) {
        classes[0] = 3834;
        classes[1] = 288;
      } else {
        classes[0] = 400;
        classes[1] = 256;
      }
    } else {
      if (features[1] <= -3.7516318559646606) {
        classes[0] = 2792;
        classes[1] = 799;
      } else {
        classes[0] = 2961;
        classes[1] = 8670;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.761328935623169) {
      if (features[1] <= -2.050563931465149) {
        classes[0] = 3990;
        classes[1] = 338;
      } else {
        classes[0] = 205;
        classes[1] = 133;
      }
    } else {
      if (features[2] <= 11.347327709197998) {
        classes[0] = 3510;
        classes[1] = 8486;
      } else {
        classes[0] = 2345;
        classes[1] = 993;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.855652570724487) {
      if (features[1] <= -2.0494418144226074) {
        classes[0] = 4084;
        classes[1] = 377;
      } else {
        classes[0] = 188;
        classes[1] = 145;
      }
    } else {
      if (features[1] <= -3.798456072807312) {
        classes[0] = 2696;
        classes[1] = 717;
      } else {
        classes[0] = 3201;
        classes[1] = 8592;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.835472106933594) {
      if (features[5] <= -2.922613739967346) {
        classes[0] = 2834;
        classes[1] = 1035;
      } else {
        classes[0] = 5273;
        classes[1] = 8562;
      }
    } else {
      if (features[1] <= -1.9425746202468872) {
        classes[0] = 1895;
        classes[1] = 291;
      } else {
        classes[0] = 58;
        classes[1] = 52;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[0] <= -454.8255615234375) {
      if (features[5] <= -3.1245802640914917) {
        classes[0] = 1436;
        classes[1] = 249;
      } else {
        classes[0] = 325;
        classes[1] = 418;
      }
    } else {
      if (features[1] <= -3.7950767278671265) {
        classes[0] = 1086;
        classes[1] = 405;
      } else {
        classes[0] = 6968;
        classes[1] = 9113;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9391690492630005) {
      if (features[4] <= -14.043167114257812) {
        classes[0] = 1469;
        classes[1] = 210;
      } else {
        classes[0] = 839;
        classes[1] = 263;
      }
    } else {
      if (features[4] <= -10.105039596557617) {
        classes[0] = 5570;
        classes[1] = 8969;
      } else {
        classes[0] = 2169;
        classes[1] = 511;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.829803466796875) {
      if (features[1] <= -2.2613714933395386) {
        classes[0] = 3534;
        classes[1] = 267;
      } else {
        classes[0] = 546;
        classes[1] = 250;
      }
    } else {
      if (features[0] <= -400.67140197753906) {
        classes[0] = 2910;
        classes[1] = 1773;
      } else {
        classes[0] = 2979;
        classes[1] = 7741;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.646477699279785) {
      if (features[2] <= 5.840473651885986) {
        classes[0] = 2521;
        classes[1] = 374;
      } else {
        classes[0] = 5625;
        classes[1] = 9496;
      }
    } else {
      if (features[5] <= -1.7716126441955566) {
        classes[0] = 1398;
        classes[1] = 123;
      } else {
        classes[0] = 328;
        classes[1] = 135;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.855652570724487) {
      if (features[1] <= -2.0576053857803345) {
        classes[0] = 4052;
        classes[1] = 374;
      } else {
        classes[0] = 216;
        classes[1] = 164;
      }
    } else {
      if (features[1] <= -3.796465754508972) {
        classes[0] = 2604;
        classes[1] = 692;
      } else {
        classes[0] = 3191;
        classes[1] = 8707;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.953912615776062) {
      if (features[2] <= 11.74859094619751) {
        classes[0] = 1311;
        classes[1] = 734;
      } else {
        classes[0] = 1451;
        classes[1] = 244;
      }
    } else {
      if (features[4] <= -10.156307697296143) {
        classes[0] = 5180;
        classes[1] = 8372;
      } else {
        classes[0] = 2213;
        classes[1] = 495;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.938387155532837) {
      if (features[1] <= -4.212425231933594) {
        classes[0] = 1583;
        classes[1] = 182;
      } else {
        classes[0] = 702;
        classes[1] = 284;
      }
    } else {
      if (features[5] <= -1.9195809960365295) {
        classes[0] = 5867;
        classes[1] = 6160;
      } else {
        classes[0] = 1769;
        classes[1] = 3453;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.653113842010498) {
      if (features[1] <= -3.7849438190460205) {
        classes[0] = 2695;
        classes[1] = 754;
      } else {
        classes[0] = 5500;
        classes[1] = 9065;
      }
    } else {
      if (features[5] <= -1.493286907672882) {
        classes[0] = 1606;
        classes[1] = 167;
      } else {
        classes[0] = 127;
        classes[1] = 86;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -3.0045430660247803) {
      if (features[5] <= -3.541472911834717) {
        classes[0] = 1358;
        classes[1] = 212;
      } else {
        classes[0] = 1249;
        classes[1] = 644;
      }
    } else {
      if (features[1] <= -2.8066585063934326) {
        classes[0] = 3342;
        classes[1] = 6050;
      } else {
        classes[0] = 4011;
        classes[1] = 3134;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.67611837387085) {
      if (features[5] <= -1.4711989760398865) {
        classes[0] = 3793;
        classes[1] = 244;
      } else {
        classes[0] = 259;
        classes[1] = 181;
      }
    } else {
      if (features[5] <= -2.922613739967346) {
        classes[0] = 2755;
        classes[1] = 985;
      } else {
        classes[0] = 3275;
        classes[1] = 8508;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.953823447227478) {
      if (features[2] <= 12.238647937774658) {
        classes[0] = 833;
        classes[1] = 285;
      } else {
        classes[0] = 1383;
        classes[1] = 164;
      }
    } else {
      if (features[0] <= -311.29188537597656) {
        classes[0] = 3440;
        classes[1] = 5882;
      } else {
        classes[0] = 4335;
        classes[1] = 3678;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.8089683055877686) {
      if (features[5] <= -1.584425151348114) {
        classes[0] = 3768;
        classes[1] = 251;
      } else {
        classes[0] = 422;
        classes[1] = 254;
      }
    } else {
      if (features[1] <= -3.695358157157898) {
        classes[0] = 2986;
        classes[1] = 959;
      } else {
        classes[0] = 2889;
        classes[1] = 8471;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.939563035964966) {
      if (features[2] <= 11.283315658569336) {
        classes[0] = 453;
        classes[1] = 178;
      } else {
        classes[0] = 1777;
        classes[1] = 270;
      }
    } else {
      if (features[1] <= -2.7840312719345093) {
        classes[0] = 3892;
        classes[1] = 6451;
      } else {
        classes[0] = 3942;
        classes[1] = 3037;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.8472155332565308) {
      if (features[1] <= -4.091897010803223) {
        classes[0] = 1830;
        classes[1] = 275;
      } else {
        classes[0] = 683;
        classes[1] = 352;
      }
    } else {
      if (features[4] <= -10.183558940887451) {
        classes[0] = 5251;
        classes[1] = 8815;
      } else {
        classes[0] = 2250;
        classes[1] = 544;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.925372362136841) {
      if (features[1] <= -4.172130107879639) {
        classes[0] = 1599;
        classes[1] = 209;
      } else {
        classes[0] = 633;
        classes[1] = 292;
      }
    } else {
      if (features[2] <= 5.894896507263184) {
        classes[0] = 4183;
        classes[1] = 591;
      } else {
        classes[0] = 3570;
        classes[1] = 8923;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.653113842010498) {
      if (features[1] <= -3.7889184951782227) {
        classes[0] = 2629;
        classes[1] = 767;
      } else {
        classes[0] = 5613;
        classes[1] = 8952;
      }
    } else {
      if (features[5] <= -1.4746423959732056) {
        classes[0] = 1651;
        classes[1] = 166;
      } else {
        classes[0] = 149;
        classes[1] = 73;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.829360485076904) {
      if (features[5] <= -1.645126223564148) {
        classes[0] = 3600;
        classes[1] = 270;
      } else {
        classes[0] = 542;
        classes[1] = 281;
      }
    } else {
      if (features[2] <= 11.354400634765625) {
        classes[0] = 3468;
        classes[1] = 8511;
      } else {
        classes[0] = 2377;
        classes[1] = 951;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.891885280609131) {
      if (features[0] <= -239.4750747680664) {
        classes[0] = 3523;
        classes[1] = 305;
      } else {
        classes[0] = 739;
        classes[1] = 244;
      }
    } else {
      if (features[5] <= -2.94089138507843) {
        classes[0] = 2644;
        classes[1] = 1016;
      } else {
        classes[0] = 3121;
        classes[1] = 8408;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[3] <= -0.0018077236600220203) {
      if (features[0] <= -460.37538146972656) {
        classes[0] = 992;
        classes[1] = 224;
      } else {
        classes[0] = 3355;
        classes[1] = 2500;
      }
    } else {
      if (features[5] <= -2.9511876106262207) {
        classes[0] = 1060;
        classes[1] = 431;
      } else {
        classes[0] = 4639;
        classes[1] = 6799;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[3] <= -0.0018954778788611293) {
      if (features[5] <= -3.1580007076263428) {
        classes[0] = 1520;
        classes[1] = 312;
      } else {
        classes[0] = 2861;
        classes[1] = 2213;
      }
    } else {
      if (features[4] <= -9.674624919891357) {
        classes[0] = 4806;
        classes[1] = 7040;
      } else {
        classes[0] = 1051;
        classes[1] = 197;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.756143093109131) {
      if (features[2] <= 5.125761270523071) {
        classes[0] = 3097;
        classes[1] = 154;
      } else {
        classes[0] = 979;
        classes[1] = 305;
      }
    } else {
      if (features[2] <= 11.32786750793457) {
        classes[0] = 3559;
        classes[1] = 8619;
      } else {
        classes[0] = 2376;
        classes[1] = 911;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -3.1648435592651367) {
      if (features[4] <= -14.55665111541748) {
        classes[0] = 1007;
        classes[1] = 142;
      } else {
        classes[0] = 1146;
        classes[1] = 423;
      }
    } else {
      if (features[4] <= -10.183558940887451) {
        classes[0] = 5579;
        classes[1] = 8946;
      } else {
        classes[0] = 2199;
        classes[1] = 558;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.907078981399536) {
      if (features[2] <= 12.056527614593506) {
        classes[0] = 857;
        classes[1] = 317;
      } else {
        classes[0] = 1493;
        classes[1] = 215;
      }
    } else {
      if (features[4] <= -10.021978378295898) {
        classes[0] = 5563;
        classes[1] = 9076;
      } else {
        classes[0] = 2056;
        classes[1] = 423;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.830587148666382) {
      if (features[0] <= -238.51443481445312) {
        classes[0] = 3573;
        classes[1] = 285;
      } else {
        classes[0] = 675;
        classes[1] = 220;
      }
    } else {
      if (features[5] <= -2.9236791133880615) {
        classes[0] = 2739;
        classes[1] = 1028;
      } else {
        classes[0] = 3064;
        classes[1] = 8416;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.856229782104492) {
      if (features[2] <= 5.174580097198486) {
        classes[0] = 3270;
        classes[1] = 212;
      } else {
        classes[0] = 931;
        classes[1] = 323;
      }
    } else {
      if (features[2] <= 10.678788185119629) {
        classes[0] = 2810;
        classes[1] = 7963;
      } else {
        classes[0] = 2883;
        classes[1] = 1608;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -10.138805389404297) {
      if (features[2] <= 5.80966329574585) {
        classes[0] = 2019;
        classes[1] = 287;
      } else {
        classes[0] = 5742;
        classes[1] = 9232;
      }
    } else {
      if (features[2] <= 5.46095609664917) {
        classes[0] = 2054;
        classes[1] = 156;
      } else {
        classes[0] = 204;
        classes[1] = 306;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -4.020518779754639) {
      if (features[0] <= -396.4197998046875) {
        classes[0] = 1803;
        classes[1] = 249;
      } else {
        classes[0] = 232;
        classes[1] = 104;
      }
    } else {
      if (features[2] <= 5.907070875167847) {
        classes[0] = 4301;
        classes[1] = 566;
      } else {
        classes[0] = 3664;
        classes[1] = 9081;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.75578761100769) {
      if (features[2] <= 5.069238185882568) {
        classes[0] = 3026;
        classes[1] = 193;
      } else {
        classes[0] = 1085;
        classes[1] = 291;
      }
    } else {
      if (features[1] <= -3.61606764793396) {
        classes[0] = 3202;
        classes[1] = 1259;
      } else {
        classes[0] = 2659;
        classes[1] = 8285;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.65147590637207) {
      if (features[2] <= 5.76233434677124) {
        classes[0] = 2455;
        classes[1] = 302;
      } else {
        classes[0] = 5805;
        classes[1] = 9407;
      }
    } else {
      if (features[4] <= -8.774113178253174) {
        classes[0] = 715;
        classes[1] = 171;
      } else {
        classes[0] = 1090;
        classes[1] = 55;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.84931755065918) {
      if (features[2] <= 5.07851505279541) {
        classes[0] = 3003;
        classes[1] = 181;
      } else {
        classes[0] = 1172;
        classes[1] = 358;
      }
    } else {
      if (features[0] <= -395.74285888671875) {
        classes[0] = 3022;
        classes[1] = 1821;
      } else {
        classes[0] = 2795;
        classes[1] = 7648;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9524316787719727) {
      if (features[1] <= -4.268932580947876) {
        classes[0] = 1469;
        classes[1] = 146;
      } else {
        classes[0] = 753;
        classes[1] = 288;
      }
    } else {
      if (features[1] <= -2.8217177391052246) {
        classes[0] = 3607;
        classes[1] = 6318;
      } else {
        classes[0] = 4135;
        classes[1] = 3284;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.893560886383057) {
      if (features[3] <= -0.00017909592133946717) {
        classes[0] = 3469;
        classes[1] = 300;
      } else {
        classes[0] = 821;
        classes[1] = 263;
      }
    } else {
      if (features[1] <= -3.6940582990646362) {
        classes[0] = 2938;
        classes[1] = 1001;
      } else {
        classes[0] = 2770;
        classes[1] = 8438;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[0] <= -456.0812530517578) {
      if (features[1] <= -3.9559004306793213) {
        classes[0] = 1455;
        classes[1] = 209;
      } else {
        classes[0] = 308;
        classes[1] = 430;
      }
    } else {
      if (features[2] <= 5.7788920402526855) {
        classes[0] = 4146;
        classes[1] = 477;
      } else {
        classes[0] = 4075;
        classes[1] = 8900;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.532460689544678) {
      if (features[2] <= 5.855652570724487) {
        classes[0] = 2540;
        classes[1] = 381;
      } else {
        classes[0] = 5841;
        classes[1] = 9356;
      }
    } else {
      if (features[2] <= 5.489025354385376) {
        classes[0] = 1603;
        classes[1] = 108;
      } else {
        classes[0] = 83;
        classes[1] = 88;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.939514994621277) {
      if (features[2] <= 12.343761920928955) {
        classes[0] = 868;
        classes[1] = 281;
      } else {
        classes[0] = 1392;
        classes[1] = 132;
      }
    } else {
      if (features[1] <= -2.818093419075012) {
        classes[0] = 3650;
        classes[1] = 6417;
      } else {
        classes[0] = 4078;
        classes[1] = 3182;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.7788920402526855) {
      if (features[5] <= -1.5314928889274597) {
        classes[0] = 3839;
        classes[1] = 288;
      } else {
        classes[0] = 327;
        classes[1] = 218;
      }
    } else {
      if (features[2] <= 11.327606201171875) {
        classes[0] = 3568;
        classes[1] = 8448;
      } else {
        classes[0] = 2365;
        classes[1] = 947;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.907078981399536) {
      if (features[2] <= 12.024251461029053) {
        classes[0] = 830;
        classes[1] = 302;
      } else {
        classes[0] = 1522;
        classes[1] = 196;
      }
    } else {
      if (features[2] <= 6.083452224731445) {
        classes[0] = 4521;
        classes[1] = 699;
      } else {
        classes[0] = 3315;
        classes[1] = 8615;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.80966329574585) {
      if (features[5] <= -1.474505364894867) {
        classes[0] = 3906;
        classes[1] = 317;
      } else {
        classes[0] = 291;
        classes[1] = 211;
      }
    } else {
      if (features[1] <= -3.7849682569503784) {
        classes[0] = 2641;
        classes[1] = 787;
      } else {
        classes[0] = 3100;
        classes[1] = 8747;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.861685752868652) {
      if (features[2] <= 5.078314781188965) {
        classes[0] = 3063;
        classes[1] = 167;
      } else {
        classes[0] = 1204;
        classes[1] = 367;
      }
    } else {
      if (features[2] <= 11.17689847946167) {
        classes[0] = 3338;
        classes[1] = 8401;
      } else {
        classes[0] = 2370;
        classes[1] = 1090;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9473384618759155) {
      if (features[0] <= -374.71275329589844) {
        classes[0] = 2030;
        classes[1] = 350;
      } else {
        classes[0] = 213;
        classes[1] = 101;
      }
    } else {
      if (features[1] <= -2.8132240772247314) {
        classes[0] = 3722;
        classes[1] = 6293;
      } else {
        classes[0] = 4002;
        classes[1] = 3289;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.756143093109131) {
      if (features[5] <= -1.474505364894867) {
        classes[0] = 3862;
        classes[1] = 282;
      } else {
        classes[0] = 287;
        classes[1] = 193;
      }
    } else {
      if (features[0] <= -409.9890594482422) {
        classes[0] = 2664;
        classes[1] = 1492;
      } else {
        classes[0] = 3169;
        classes[1] = 8051;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.829803466796875) {
      if (features[1] <= -2.2729169130325317) {
        classes[0] = 3673;
        classes[1] = 276;
      } else {
        classes[0] = 588;
        classes[1] = 259;
      }
    } else {
      if (features[1] <= -3.694316267967224) {
        classes[0] = 3008;
        classes[1] = 957;
      } else {
        classes[0] = 2908;
        classes[1] = 8331;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -3.1494890451431274) {
      if (features[0] <= -435.7459259033203) {
        classes[0] = 1609;
        classes[1] = 315;
      } else {
        classes[0] = 641;
        classes[1] = 311;
      }
    } else {
      if (features[1] <= -2.779904842376709) {
        classes[0] = 3928;
        classes[1] = 6419;
      } else {
        classes[0] = 3780;
        classes[1] = 2997;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9394216537475586) {
      if (features[2] <= 12.47250747680664) {
        classes[0] = 1047;
        classes[1] = 328;
      } else {
        classes[0] = 1294;
        classes[1] = 168;
      }
    } else {
      if (features[0] <= -300.78135681152344) {
        classes[0] = 3974;
        classes[1] = 6345;
      } else {
        classes[0] = 3711;
        classes[1] = 3133;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.903196811676025) {
      if (features[1] <= -2.270852565765381) {
        classes[0] = 3723;
        classes[1] = 319;
      } else {
        classes[0] = 581;
        classes[1] = 268;
      }
    } else {
      if (features[1] <= -3.6916359663009644) {
        classes[0] = 3000;
        classes[1] = 1021;
      } else {
        classes[0] = 2740;
        classes[1] = 8348;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9557570219039917) {
      if (features[0] <= -370.45025634765625) {
        classes[0] = 2083;
        classes[1] = 358;
      } else {
        classes[0] = 170;
        classes[1] = 88;
      }
    } else {
      if (features[4] <= -10.153864860534668) {
        classes[0] = 5495;
        classes[1] = 9037;
      } else {
        classes[0] = 2239;
        classes[1] = 530;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.9653319120407104) {
      if (features[1] <= -4.172484397888184) {
        classes[0] = 1620;
        classes[1] = 210;
      } else {
        classes[0] = 1137;
        classes[1] = 690;
      }
    } else {
      if (features[0] <= -303.5827941894531) {
        classes[0] = 3309;
        classes[1] = 5828;
      } else {
        classes[0] = 3913;
        classes[1] = 3293;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.68665361404419) {
      if (features[0] <= -417.28990173339844) {
        classes[0] = 2450;
        classes[1] = 1350;
      } else {
        classes[0] = 5633;
        classes[1] = 8530;
      }
    } else {
      if (features[1] <= -1.8693788051605225) {
        classes[0] = 1749;
        classes[1] = 219;
      } else {
        classes[0] = 37;
        classes[1] = 32;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9395443201065063) {
      if (features[2] <= 10.695063591003418) {
        classes[0] = 295;
        classes[1] = 148;
      } else {
        classes[0] = 1996;
        classes[1] = 318;
      }
    } else {
      if (features[0] <= -298.2921447753906) {
        classes[0] = 3925;
        classes[1] = 6671;
      } else {
        classes[0] = 3631;
        classes[1] = 3016;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.680118083953857) {
      if (features[5] <= -2.9626680612564087) {
        classes[0] = 2679;
        classes[1] = 922;
      } else {
        classes[0] = 5550;
        classes[1] = 8800;
      }
    } else {
      if (features[4] <= -9.121865272521973) {
        classes[0] = 443;
        classes[1] = 136;
      } else {
        classes[0] = 1363;
        classes[1] = 107;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.779034852981567) {
      if (features[2] <= 5.078826665878296) {
        classes[0] = 3001;
        classes[1] = 175;
      } else {
        classes[0] = 1041;
        classes[1] = 313;
      }
    } else {
      if (features[0] <= -395.4917297363281) {
        classes[0] = 2994;
        classes[1] = 1926;
      } else {
        classes[0] = 2944;
        classes[1] = 7606;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[0] <= -439.5278778076172) {
      if (features[2] <= 11.20457649230957) {
        classes[0] = 429;
        classes[1] = 474;
      } else {
        classes[0] = 1662;
        classes[1] = 377;
      }
    } else {
      if (features[5] <= -1.9195809960365295) {
        classes[0] = 6108;
        classes[1] = 5825;
      } else {
        classes[0] = 1767;
        classes[1] = 3358;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.674624919891357) {
      if (features[2] <= 5.941329479217529) {
        classes[0] = 2558;
        classes[1] = 433;
      } else {
        classes[0] = 5591;
        classes[1] = 9389;
      }
    } else {
      if (features[4] <= -8.942909240722656) {
        classes[0] = 564;
        classes[1] = 181;
      } else {
        classes[0] = 1194;
        classes[1] = 90;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.908308267593384) {
      if (features[1] <= -2.2729412317276) {
        classes[0] = 3668;
        classes[1] = 333;
      } else {
        classes[0] = 552;
        classes[1] = 224;
      }
    } else {
      if (features[1] <= -3.7820616960525513) {
        classes[0] = 2697;
        classes[1] = 780;
      } else {
        classes[0] = 3070;
        classes[1] = 8676;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -10.156307697296143) {
      if (features[2] <= 5.908308267593384) {
        classes[0] = 2146;
        classes[1] = 322;
      } else {
        classes[0] = 5596;
        classes[1] = 9177;
      }
    } else {
      if (features[0] <= -213.02313995361328) {
        classes[0] = 1961;
        classes[1] = 403;
      } else {
        classes[0] = 260;
        classes[1] = 135;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.938129425048828) {
      if (features[1] <= -4.230963230133057) {
        classes[0] = 1504;
        classes[1] = 195;
      } else {
        classes[0] = 729;
        classes[1] = 294;
      }
    } else {
      if (features[1] <= -2.873525857925415) {
        classes[0] = 3365;
        classes[1] = 5899;
      } else {
        classes[0] = 4339;
        classes[1] = 3675;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -4.00510311126709) {
      if (features[2] <= 12.402020931243896) {
        classes[0] = 778;
        classes[1] = 227;
      } else {
        classes[0] = 1278;
        classes[1] = 142;
      }
    } else {
      if (features[2] <= 5.778724670410156) {
        classes[0] = 4116;
        classes[1] = 472;
      } else {
        classes[0] = 3747;
        classes[1] = 9240;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.939514994621277) {
      if (features[1] <= -4.231113433837891) {
        classes[0] = 1546;
        classes[1] = 180;
      } else {
        classes[0] = 718;
        classes[1] = 296;
      }
    } else {
      if (features[2] <= 5.892186403274536) {
        classes[0] = 4185;
        classes[1] = 566;
      } else {
        classes[0] = 3549;
        classes[1] = 8960;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.761370420455933) {
      if (features[5] <= -1.42771714925766) {
        classes[0] = 3957;
        classes[1] = 300;
      } else {
        classes[0] = 231;
        classes[1] = 180;
      }
    } else {
      if (features[1] <= -3.7588751316070557) {
        classes[0] = 2820;
        classes[1] = 841;
      } else {
        classes[0] = 3146;
        classes[1] = 8525;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.9542577266693115) {
      if (features[1] <= -4.231335163116455) {
        classes[0] = 1477;
        classes[1] = 194;
      } else {
        classes[0] = 1321;
        classes[1] = 772;
      }
    } else {
      if (features[4] <= -10.152593612670898) {
        classes[0] = 5055;
        classes[1] = 8563;
      } else {
        classes[0] = 2156;
        classes[1] = 462;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9389067888259888) {
      if (features[1] <= -4.197891473770142) {
        classes[0] = 1560;
        classes[1] = 171;
      } else {
        classes[0] = 680;
        classes[1] = 269;
      }
    } else {
      if (features[4] <= -9.759243965148926) {
        classes[0] = 5917;
        classes[1] = 9292;
      } else {
        classes[0] = 1853;
        classes[1] = 258;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9412944316864014) {
      if (features[2] <= 12.312121391296387) {
        classes[0] = 898;
        classes[1] = 302;
      } else {
        classes[0] = 1381;
        classes[1] = 173;
      }
    } else {
      if (features[4] <= -10.222526550292969) {
        classes[0] = 5509;
        classes[1] = 9028;
      } else {
        classes[0] = 2198;
        classes[1] = 511;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.63312578201294) {
      if (features[5] <= -2.974305748939514) {
        classes[0] = 2633;
        classes[1] = 872;
      } else {
        classes[0] = 5601;
        classes[1] = 8916;
      }
    } else {
      if (features[4] <= -9.11649465560913) {
        classes[0] = 416;
        classes[1] = 125;
      } else {
        classes[0] = 1338;
        classes[1] = 99;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -10.155099391937256) {
      if (features[2] <= 5.846508741378784) {
        classes[0] = 2124;
        classes[1] = 301;
      } else {
        classes[0] = 5688;
        classes[1] = 9146;
      }
    } else {
      if (features[1] <= -1.496043860912323) {
        classes[0] = 2208;
        classes[1] = 491;
      } else {
        classes[0] = 14;
        classes[1] = 28;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.676239967346191) {
      if (features[1] <= -2.27366840839386) {
        classes[0] = 3472;
        classes[1] = 196;
      } else {
        classes[0] = 552;
        classes[1] = 224;
      }
    } else {
      if (features[0] <= -399.639892578125) {
        classes[0] = 2872;
        classes[1] = 1784;
      } else {
        classes[0] = 3003;
        classes[1] = 7897;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.651516914367676) {
      if (features[2] <= 6.090131998062134) {
        classes[0] = 2750;
        classes[1] = 494;
      } else {
        classes[0] = 5520;
        classes[1] = 9250;
      }
    } else {
      if (features[0] <= -241.57881927490234) {
        classes[0] = 1261;
        classes[1] = 146;
      } else {
        classes[0] = 462;
        classes[1] = 117;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.840353965759277) {
      if (features[1] <= -3.939563035964966) {
        classes[0] = 2237;
        classes[1] = 438;
      } else {
        classes[0] = 5880;
        classes[1] = 9216;
      }
    } else {
      if (features[5] <= -1.6269416213035583) {
        classes[0] = 1673;
        classes[1] = 214;
      } else {
        classes[0] = 222;
        classes[1] = 120;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9413554668426514) {
      if (features[5] <= -3.539107084274292) {
        classes[0] = 1354;
        classes[1] = 204;
      } else {
        classes[0] = 913;
        classes[1] = 275;
      }
    } else {
      if (features[1] <= -2.8031173944473267) {
        classes[0] = 3749;
        classes[1] = 6455;
      } else {
        classes[0] = 3971;
        classes[1] = 3079;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.954266905784607) {
      if (features[2] <= 12.524317741394043) {
        classes[0] = 937;
        classes[1] = 249;
      } else {
        classes[0] = 1260;
        classes[1] = 116;
      }
    } else {
      if (features[1] <= -2.8181151151657104) {
        classes[0] = 3671;
        classes[1] = 6363;
      } else {
        classes[0] = 4168;
        classes[1] = 3236;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.7856563329696655) {
      if (features[0] <= -342.6932678222656) {
        classes[0] = 2549;
        classes[1] = 630;
      } else {
        classes[0] = 167;
        classes[1] = 108;
      }
    } else {
      if (features[0] <= -311.1204528808594) {
        classes[0] = 2921;
        classes[1] = 5598;
      } else {
        classes[0] = 4309;
        classes[1] = 3718;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9541021585464478) {
      if (features[5] <= -3.6194357872009277) {
        classes[0] = 1207;
        classes[1] = 175;
      } else {
        classes[0] = 1014;
        classes[1] = 266;
      }
    } else {
      if (features[2] <= 6.025475025177002) {
        classes[0] = 4355;
        classes[1] = 649;
      } else {
        classes[0] = 3479;
        classes[1] = 8855;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.915377616882324) {
      if (features[1] <= -4.1758317947387695) {
        classes[0] = 1582;
        classes[1] = 235;
      } else {
        classes[0] = 1294;
        classes[1] = 857;
      }
    } else {
      if (features[2] <= 5.882343292236328) {
        classes[0] = 4079;
        classes[1] = 571;
      } else {
        classes[0] = 2850;
        classes[1] = 8532;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9378998279571533) {
      if (features[2] <= 11.427563190460205) {
        classes[0] = 543;
        classes[1] = 209;
      } else {
        classes[0] = 1700;
        classes[1] = 258;
      }
    } else {
      if (features[4] <= -10.10701322555542) {
        classes[0] = 5656;
        classes[1] = 9071;
      } else {
        classes[0] = 2108;
        classes[1] = 455;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9389067888259888) {
      if (features[5] <= -4.007112741470337) {
        classes[0] = 728;
        classes[1] = 66;
      } else {
        classes[0] = 1535;
        classes[1] = 390;
      }
    } else {
      if (features[1] <= -2.8103058338165283) {
        classes[0] = 3700;
        classes[1] = 6432;
      } else {
        classes[0] = 3975;
        classes[1] = 3174;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.756143093109131) {
      if (features[2] <= 5.148017883300781) {
        classes[0] = 3099;
        classes[1] = 203;
      } else {
        classes[0] = 992;
        classes[1] = 290;
      }
    } else {
      if (features[1] <= -3.796465754508972) {
        classes[0] = 2670;
        classes[1] = 727;
      } else {
        classes[0] = 3252;
        classes[1] = 8767;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9732539653778076) {
      if (features[5] <= -3.6669552326202393) {
        classes[0] = 1145;
        classes[1] = 127;
      } else {
        classes[0] = 968;
        classes[1] = 280;
      }
    } else {
      if (features[2] <= 6.037836790084839) {
        classes[0] = 4372;
        classes[1] = 713;
      } else {
        classes[0] = 3429;
        classes[1] = 8966;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.7788920402526855) {
      if (features[1] <= -2.2729169130325317) {
        classes[0] = 3499;
        classes[1] = 263;
      } else {
        classes[0] = 562;
        classes[1] = 246;
      }
    } else {
      if (features[2] <= 11.133410930633545) {
        classes[0] = 3362;
        classes[1] = 8497;
      } else {
        classes[0] = 2511;
        classes[1] = 1060;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.905501961708069) {
      if (features[0] <= -332.2077331542969) {
        classes[0] = 2233;
        classes[1] = 415;
      } else {
        classes[0] = 142;
        classes[1] = 86;
      }
    } else {
      if (features[4] <= -10.155360221862793) {
        classes[0] = 5427;
        classes[1] = 8876;
      } else {
        classes[0] = 2272;
        classes[1] = 549;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9513732194900513) {
      if (features[0] <= -374.71275329589844) {
        classes[0] = 1971;
        classes[1] = 338;
      } else {
        classes[0] = 206;
        classes[1] = 98;
      }
    } else {
      if (features[2] <= 5.89258337020874) {
        classes[0] = 4268;
        classes[1] = 567;
      } else {
        classes[0] = 3591;
        classes[1] = 8961;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.653113842010498) {
      if (features[5] <= -2.987584352493286) {
        classes[0] = 2709;
        classes[1] = 873;
      } else {
        classes[0] = 5600;
        classes[1] = 8789;
      }
    } else {
      if (features[5] <= -1.078437089920044) {
        classes[0] = 1756;
        classes[1] = 209;
      } else {
        classes[0] = 22;
        classes[1] = 42;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.9240607023239136) {
      if (features[2] <= 12.402921199798584) {
        classes[0] = 1665;
        classes[1] = 899;
      } else {
        classes[0] = 1328;
        classes[1] = 178;
      }
    } else {
      if (features[2] <= 5.894896507263184) {
        classes[0] = 4072;
        classes[1] = 563;
      } else {
        classes[0] = 2965;
        classes[1] = 8330;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.586684226989746) {
      if (features[1] <= -3.8152542114257812) {
        classes[0] = 2638;
        classes[1] = 656;
      } else {
        classes[0] = 5712;
        classes[1] = 9055;
      }
    } else {
      if (features[2] <= 5.484705686569214) {
        classes[0] = 1611;
        classes[1] = 124;
      } else {
        classes[0] = 93;
        classes[1] = 111;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.90723979473114) {
      if (features[5] <= -3.6199721097946167) {
        classes[0] = 1245;
        classes[1] = 168;
      } else {
        classes[0] = 1144;
        classes[1] = 357;
      }
    } else {
      if (features[3] <= -0.0031679108506068587) {
        classes[0] = 2061;
        classes[1] = 1558;
      } else {
        classes[0] = 5633;
        classes[1] = 7834;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9064360857009888) {
      if (features[0] <= -402.54103088378906) {
        classes[0] = 1997;
        classes[1] = 344;
      } else {
        classes[0] = 333;
        classes[1] = 149;
      }
    } else {
      if (features[2] <= 5.892669439315796) {
        classes[0] = 4287;
        classes[1] = 552;
      } else {
        classes[0] = 3527;
        classes[1] = 8811;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.869272947311401) {
      if (features[0] <= -250.7901382446289) {
        classes[0] = 3332;
        classes[1] = 250;
      } else {
        classes[0] = 1019;
        classes[1] = 300;
      }
    } else {
      if (features[2] <= 11.27310037612915) {
        classes[0] = 3352;
        classes[1] = 8380;
      } else {
        classes[0] = 2375;
        classes[1] = 992;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.920977473258972) {
      if (features[1] <= -4.0866804122924805) {
        classes[0] = 1754;
        classes[1] = 312;
      } else {
        classes[0] = 1050;
        classes[1] = 820;
      }
    } else {
      if (features[1] <= -2.8097267150878906) {
        classes[0] = 3110;
        classes[1] = 5741;
      } else {
        classes[0] = 4038;
        classes[1] = 3175;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[3] <= -0.0015449504717253149) {
      if (features[4] <= -10.150360107421875) {
        classes[0] = 3575;
        classes[1] = 2810;
      } else {
        classes[0] = 995;
        classes[1] = 141;
      }
    } else {
      if (features[1] <= -3.7962918281555176) {
        classes[0] = 977;
        classes[1] = 305;
      } else {
        classes[0] = 4445;
        classes[1] = 6752;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9524316787719727) {
      if (features[5] <= -3.7620108127593994) {
        classes[0] = 978;
        classes[1] = 103;
      } else {
        classes[0] = 1206;
        classes[1] = 338;
      }
    } else {
      if (features[1] <= -2.818093419075012) {
        classes[0] = 3825;
        classes[1] = 6317;
      } else {
        classes[0] = 4049;
        classes[1] = 3184;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.8415539264678955) {
      if (features[5] <= -1.474505364894867) {
        classes[0] = 3916;
        classes[1] = 315;
      } else {
        classes[0] = 283;
        classes[1] = 194;
      }
    } else {
      if (features[0] <= -395.74517822265625) {
        classes[0] = 3028;
        classes[1] = 1926;
      } else {
        classes[0] = 2793;
        classes[1] = 7545;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[5] <= -2.965376615524292) {
      if (features[1] <= -4.062439680099487) {
        classes[0] = 1894;
        classes[1] = 283;
      } else {
        classes[0] = 925;
        classes[1] = 633;
      }
    } else {
      if (features[3] <= -0.0019326595356687903) {
        classes[0] = 2511;
        classes[1] = 2029;
      } else {
        classes[0] = 4671;
        classes[1] = 7054;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9412944316864014) {
      if (features[2] <= 12.418605327606201) {
        classes[0] = 955;
        classes[1] = 306;
      } else {
        classes[0] = 1319;
        classes[1] = 178;
      }
    } else {
      if (features[2] <= 5.893560886383057) {
        classes[0] = 4265;
        classes[1] = 621;
      } else {
        classes[0] = 3503;
        classes[1] = 8853;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.855429410934448) {
      if (features[2] <= 5.078826665878296) {
        classes[0] = 3016;
        classes[1] = 181;
      } else {
        classes[0] = 1223;
        classes[1] = 343;
      }
    } else {
      if (features[1] <= -3.76496958732605) {
        classes[0] = 2754;
        classes[1] = 779;
      } else {
        classes[0] = 3029;
        classes[1] = 8675;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.750384330749512) {
      if (features[2] <= 5.839727878570557) {
        classes[0] = 2466;
        classes[1] = 379;
      } else {
        classes[0] = 5712;
        classes[1] = 9356;
      }
    } else {
      if (features[4] <= -8.802319526672363) {
        classes[0] = 705;
        classes[1] = 228;
      } else {
        classes[0] = 1090;
        classes[1] = 64;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[4] <= -9.674457550048828) {
      if (features[2] <= 5.8089683055877686) {
        classes[0] = 2509;
        classes[1] = 354;
      } else {
        classes[0] = 5871;
        classes[1] = 9220;
      }
    } else {
      if (features[0] <= -207.50784301757812) {
        classes[0] = 1570;
        classes[1] = 179;
      } else {
        classes[0] = 225;
        classes[1] = 72;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[1] <= -3.9557570219039917) {
      if (features[5] <= -3.625672221183777) {
        classes[0] = 1245;
        classes[1] = 139;
      } else {
        classes[0] = 1048;
        classes[1] = 271;
      }
    } else {
      if (features[4] <= -10.153864860534668) {
        classes[0] = 5591;
        classes[1] = 8921;
      } else {
        classes[0] = 2240;
        classes[1] = 545;
      }
    }

    return findMax(classes);
  });

  trees.push(function (features) {
    var classes = new Array(2);

    if (features[2] <= 5.80966329574585) {
      if (features[3] <= -0.0006273209000937641) {
        classes[0] = 2536;
        classes[1] = 173;
      } else {
        classes[0] = 1586;
        classes[1] = 303;
      }
    } else {
      if (features[1] <= -3.726261019706726) {
        classes[0] = 2832;
        classes[1] = 981;
      } else {
        classes[0] = 2952;
        classes[1] = 8637;
      }
    }

    return findMax(classes);
  });

  this.predict = function (features) {
    var classes = new Array(2).fill(0);
    for (var i = 0; i < trees.length; i++) {
      classes[trees[i](features)]++;
    }
    return findMax(classes);
  }

};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
  if (process.argv.length - 2 == 6) {

    // Features:
    var features = process.argv.slice(2);

    // Prediction:
    var prediction = new RandomForestClassifier().predict(features);
    console.log(prediction);

  }
}

export default RandomForestClassifier