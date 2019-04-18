// These tests were generated by Go code that also passes with the same values. Do not edit.

import TxSignPrep from '../TxSignPrep'

describe('Transfer object prepare tests', () => {
  it('should build an object for Transfer and convert to known b64', () => {
    var transfertx = {
      source: 'ndanwick5msiibq2n64kzuex7hh9mm3tzhy8sg3dx4c4i867',
      destination: 'ndaijix287f2rn2sg4kezm47ihxwh28g794sm7z8as4ug9yr',
      qty: 1550453263105981,
      sequence: 732340766579218,
      signatures: [
        'a4jadtca7ag4edzhr3zij2j2n8spisrykeu4ccxi57gia3fasqz3qmmwjrwddgq9xwx8guizsh83xvk8azcatz6m7pkfb5xg86mwhh5iurax9xkbkes3ts5z'
      ]
    }

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaWppeDI4N2Yycm4yc2c0a2V6bTQ3aWh4d2gyOGc3OTRzbTd6OGFzNHVnOXlyAAWCIQf8/70AApoPXz8aEm5kYW53aWNrNW1zaWlicTJuNjRrenVleDdoaDltbTN0emh5OHNnM2R4NGM0aTg2Nw=='
    )
  })
  it('should build an object for Transfer without signatures and convert to known b64', () => {
    var transfertx = {
      destination: 'ndaijix287f2rn2sg4kezm47ihxwh28g794sm7z8as4ug9yr',
      qty: 1550453263105981,
      sequence: 732340766579218,
      source: 'ndanwick5msiibq2n64kzuex7hh9mm3tzhy8sg3dx4c4i867'
    }

    var bb = new TxSignPrep().prepare(transfertx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaWppeDI4N2Yycm4yc2c0a2V6bTQ3aWh4d2gyOGc3OTRzbTd6OGFzNHVnOXlyAAWCIQf8/70AApoPXz8aEm5kYW53aWNrNW1zaWlicTJuNjRrenVleDdoaDltbTN0emh5OHNnM2R4NGM0aTg2Nw=='
    )
  })
})
describe('ChangeValidation object prepare tests', () => {
  it('should build an object for ChangeValidation and convert to known b64', () => {
    var changevalidationtx = {
      target: 'ndab6dqfsag63c3t6hfrx92fxxmj8kahsbvga6gns35834gn',
      new_keys: [
        'npuba8jadtbbeaafs4jhx64twu4e9bk9ba9bavtn6nidnw6g6qmwyu3c9km2ts6zfb6gjg3kidyp'
      ],
      validation_script: 'e3NhEYNf+ha+LzS4',
      sequence: 4589118442271941,
      signatures: [
        'a4jadtcautxp2dzqsah4wfkkvxjbk6n7pnuru7uticeq3vfr2e9vunawpc5cjjcnfmbxzis7b4n7mu5xbhmb469xjvm59s9e75ap94cwg2yv3spxftam887v'
      ]
    }

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bnB1YmE4amFkdGJiZWFhZnM0amh4NjR0d3U0ZTliazliYTliYXZ0bjZuaWRudzZnNnFtd3l1M2M5a20ydHM2emZiNmdqZzNraWR5cAAQTcdmlXTFbmRhYjZkcWZzYWc2M2MzdDZoZnJ4OTJmeHhtajhrYWhzYnZnYTZnbnMzNTgzNGduZTNOaEVZTmYraGErTHpTNA=='
    )
  })
  it('should build an object for ChangeValidation without signatures and convert to known b64', () => {
    var changevalidationtx = {
      new_keys: [
        'npuba8jadtbbeaafs4jhx64twu4e9bk9ba9bavtn6nidnw6g6qmwyu3c9km2ts6zfb6gjg3kidyp'
      ],
      sequence: 4589118442271941,
      target: 'ndab6dqfsag63c3t6hfrx92fxxmj8kahsbvga6gns35834gn',
      validation_script: 'e3NhEYNf+ha+LzS4'
    }

    var bb = new TxSignPrep().prepare(changevalidationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bnB1YmE4amFkdGJiZWFhZnM0amh4NjR0d3U0ZTliazliYTliYXZ0bjZuaWRudzZnNnFtd3l1M2M5a20ydHM2emZiNmdqZzNraWR5cAAQTcdmlXTFbmRhYjZkcWZzYWc2M2MzdDZoZnJ4OTJmeHhtajhrYWhzYnZnYTZnbnMzNTgzNGduZTNOaEVZTmYraGErTHpTNA=='
    )
  })
})
describe('ReleaseFromEndowment object prepare tests', () => {
  it('should build an object for ReleaseFromEndowment and convert to known b64', () => {
    var releasefromendowmenttx = {
      destination: 'ndaezhk5p5qhssy6rjywmpwp3c9ey4c99cz9k7avnbx9zjx9',
      qty: 1975528111046083,
      sequence: 7465139729523843,
      signatures: [
        'a4jadtcaa2ch7634ihnjtcb5wna6r6ykfxp63mhftq5envriqbjkuxgi89ad6f7xarfrnt33iag2wx6qkqs8r8gkfxpn3zb5kttk7rc9duej86qy6jh8i82t'
      ]
    }

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhZXpoazVwNXFoc3N5NnJqeXdtcHdwM2M5ZXk0Yzk5Y3o5azdhdm5ieDl6ang5AAcEu3tNfcMAGoWBScbkgw=='
    )
  })
  it('should build an object for ReleaseFromEndowment without signatures and convert to known b64', () => {
    var releasefromendowmenttx = {
      destination: 'ndaezhk5p5qhssy6rjywmpwp3c9ey4c99cz9k7avnbx9zjx9',
      qty: 1975528111046083,
      sequence: 7465139729523843
    }

    var bb = new TxSignPrep().prepare(releasefromendowmenttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhZXpoazVwNXFoc3N5NnJqeXdtcHdwM2M5ZXk0Yzk5Y3o5azdhdm5ieDl6ang5AAcEu3tNfcMAGoWBScbkgw=='
    )
  })
})
describe('ChangeSettlementPeriod object prepare tests', () => {
  it('should build an object for ChangeSettlementPeriod and convert to known b64', () => {
    var changesettlementperiodtx = {
      target: 'ndaf32uravwb5vysyb7zdw4x7pcz4ze2n5ug6cz7st33gia8',
      period: '11m25dt14h35m49s167320us',
      sequence: 1912297565323361,
      signatures: [
        'a4jadtcayemrkjjtebz58rdbbrmhkmc47ha369zizfsw38cqcmfpe9v7idncipmgd3yv27ucp2nydw9ftn2pg2bh8k2vdtwemvkggndat67deddh3uxqdr2k'
      ]
    }

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFmMzJ1cmF2d2I1dnlzeWI3emR3NHg3cGN6NHplMm41dWc2Y3o3c3QzM2dpYTg='
    )
  })
  it('should build an object for ChangeSettlementPeriod without signatures and convert to known b64', () => {
    var changesettlementperiodtx = {
      period: '11m25dt14h35m49s167320us',
      sequence: 1912297565323361,
      target: 'ndaf32uravwb5vysyb7zdw4x7pcz4ze2n5ug6cz7st33gia8'
    }

    var bb = new TxSignPrep().prepare(changesettlementperiodtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'MTFtMjVkdDE0aDM1bTQ5czE2NzMyMHVzAAbLOXkWAGFuZGFmMzJ1cmF2d2I1dnlzeWI3emR3NHg3cGN6NHplMm41dWc2Y3o3c3QzM2dpYTg='
    )
  })
})
describe('Delegate object prepare tests', () => {
  it('should build an object for Delegate and convert to known b64', () => {
    var delegatetx = {
      target: 'ndabf95wtvj7ypv6qq7u4nu6ytjbppza2dd72kbp953qyr7i',
      node: 'ndaebr5pi4g4vm6q8mvxgemkf5c2ps7nu63wbs3vzxmvg8ab',
      sequence: 2483436573217588,
      signatures: [
        'a4jadtcazqhde6pj8dwgehnnpggze7v945kdsa3fmcjd753wjv8nqjjamsqr79zsewmm68qf47nf2jb8jw24wrb3pft6rquuys7ggufxntge8fnbhem4ybwi'
      ]
    }

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhZWJyNXBpNGc0dm02cThtdnhnZW1rZjVjMnBzN251NjN3YnMzdnp4bXZnOGFiAAjSrCLE0zRuZGFiZjk1d3R2ajd5cHY2cXE3dTRudTZ5dGpicHB6YTJkZDcya2JwOTUzcXlyN2k='
    )
  })
  it('should build an object for Delegate without signatures and convert to known b64', () => {
    var delegatetx = {
      node: 'ndaebr5pi4g4vm6q8mvxgemkf5c2ps7nu63wbs3vzxmvg8ab',
      sequence: 2483436573217588,
      target: 'ndabf95wtvj7ypv6qq7u4nu6ytjbppza2dd72kbp953qyr7i'
    }

    var bb = new TxSignPrep().prepare(delegatetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhZWJyNXBpNGc0dm02cThtdnhnZW1rZjVjMnBzN251NjN3YnMzdnp4bXZnOGFiAAjSrCLE0zRuZGFiZjk1d3R2ajd5cHY2cXE3dTRudTZ5dGpicHB6YTJkZDcya2JwOTUzcXlyN2k='
    )
  })
})
describe('CreditEAI object prepare tests', () => {
  it('should build an object for CreditEAI and convert to known b64', () => {
    var crediteaitx = {
      node: 'ndahd57jdjzw74kgm77jfcgeymp7h8xwky9tyijy55h2pqtn',
      sequence: 2673222963759107,
      signatures: [
        'a4jadtcay2ks466njzbk323yid83w3gdssthijhww48qt2v76b7tkqbtmitaajijxkmvgvrdd7i5gpbqee6dg2inge6ayjysqy9bmjq9ds3tpw2d7q7rp58e'
      ]
    }

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaGQ1N2pkanp3NzRrZ203N2pmY2dleW1wN2g4eHdreTl0eWlqeTU1aDJwcXRuAAl/SDkpCAM='
    )
  })
  it('should build an object for CreditEAI without signatures and convert to known b64', () => {
    var crediteaitx = {
      node: 'ndahd57jdjzw74kgm77jfcgeymp7h8xwky9tyijy55h2pqtn',
      sequence: 2673222963759107
    }

    var bb = new TxSignPrep().prepare(crediteaitx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaGQ1N2pkanp3NzRrZ203N2pmY2dleW1wN2g4eHdreTl0eWlqeTU1aDJwcXRuAAl/SDkpCAM='
    )
  })
})
describe('Lock object prepare tests', () => {
  it('should build an object for Lock and convert to known b64', () => {
    var locktx = {
      target: 'ndaq9mdynxnh3kevrcicsqbzsvefrhha65jt4sfukfjb5293',
      period: '3y20dt6h48m279449us',
      sequence: 5203743511895827,
      signatures: [
        'a4jadtcaycvgw678aiwidme9rqtadvxn2bhbp3gt8vs7d6i3eezkg8gg5vgaq8s7rj2dfai59mj93347senkndn2k6n798yy9wm5u5miaugyb4wkja4rqt72'
      ]
    }

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcTltZHlueG5oM2tldnJjaWNzcWJ6c3ZlZnJoaGE2NWp0NHNmdWtmamI1Mjkz'
    )
  })
  it('should build an object for Lock without signatures and convert to known b64', () => {
    var locktx = {
      period: '3y20dt6h48m279449us',
      sequence: 5203743511895827,
      target: 'ndaq9mdynxnh3kevrcicsqbzsvefrhha65jt4sfukfjb5293'
    }

    var bb = new TxSignPrep().prepare(locktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'M3kyMGR0Nmg0OG0yNzk0NDl1cwASfMbzh18TbmRhcTltZHlueG5oM2tldnJjaWNzcWJ6c3ZlZnJoaGE2NWp0NHNmdWtmamI1Mjkz'
    )
  })
})
describe('Notify object prepare tests', () => {
  it('should build an object for Notify and convert to known b64', () => {
    var notifytx = {
      target: 'ndad24uv4rc3bhe6x8imwe5bib2veaj8qxnsjvyftvt8j88a',
      sequence: 1507085064423784,
      signatures: [
        'a4jadtcaxidpxip48di9u44z4jcb8q6dtudsmjvkmm7qkr3dfknvd9ggzdveak7pvhy49umtyty6gu4pe9sy7vbqm4iainz7zzbuidujth4bap22fjqrzs5k'
      ]
    }

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'AAVar5XpSWhuZGFkMjR1djRyYzNiaGU2eDhpbXdlNWJpYjJ2ZWFqOHF4bnNqdnlmdHZ0OGo4OGE='
    )
  })
  it('should build an object for Notify without signatures and convert to known b64', () => {
    var notifytx = {
      sequence: 1507085064423784,
      target: 'ndad24uv4rc3bhe6x8imwe5bib2veaj8qxnsjvyftvt8j88a'
    }

    var bb = new TxSignPrep().prepare(notifytx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'AAVar5XpSWhuZGFkMjR1djRyYzNiaGU2eDhpbXdlNWJpYjJ2ZWFqOHF4bnNqdnlmdHZ0OGo4OGE='
    )
  })
})
describe('SetRewardsDestination object prepare tests', () => {
  it('should build an object for SetRewardsDestination and convert to known b64', () => {
    var setrewardsdestinationtx = {
      source: 'ndakz3etjvgen85hv879x75c8n4dni4eydyxywg9txhegbt8',
      destination: 'ndaidgsd9n7quzcitp3pcppyphmsba7vt32hw8g2pv3p7rb8',
      sequence: 3658774096214545,
      signatures: [
        'a4jadtcatjn2w7kpq8s756sstxmwziycs9q4m3744s9ueidcmc93atwhkaen363cbyq5rpdz7e59h9eyrzjwwg93v9a4hffwki5y4ph2cq22fjqsdfzkzabz'
      ]
    }

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaWRnc2Q5bjdxdXpjaXRwM3BjcHB5cGhtc2JhN3Z0MzJodzhnMnB2M3A3cmI4AAz/orpRehFuZGFrejNldGp2Z2VuODVodjg3OXg3NWM4bjRkbmk0ZXlkeXh5d2c5dHhoZWdidDg='
    )
  })
  it('should build an object for SetRewardsDestination without signatures and convert to known b64', () => {
    var setrewardsdestinationtx = {
      destination: 'ndaidgsd9n7quzcitp3pcppyphmsba7vt32hw8g2pv3p7rb8',
      sequence: 3658774096214545,
      source: 'ndakz3etjvgen85hv879x75c8n4dni4eydyxywg9txhegbt8'
    }

    var bb = new TxSignPrep().prepare(setrewardsdestinationtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaWRnc2Q5bjdxdXpjaXRwM3BjcHB5cGhtc2JhN3Z0MzJodzhnMnB2M3A3cmI4AAz/orpRehFuZGFrejNldGp2Z2VuODVodjg3OXg3NWM4bjRkbmk0ZXlkeXh5d2c5dHhoZWdidDg='
    )
  })
})
describe('SetValidation object prepare tests', () => {
  it('should build an object for SetValidation and convert to known b64', () => {
    var setValidationaccounttx = {
      target: 'ndacby8ywhuv9ckgn54kkmu2cf3k3kmuq379urraw3u6zcqe',
      ownership:
        'npuba8jadtbbecdwzxpufjuz3xgs5ae5sfkatf7eua2z7dt7xbfswqzqgjscxthi2asksx2jhh9e',
      validation_keys: [
        'npuba8jadtbbedbyckzy7et3beswrkc9iwazwixuhbtxepm74c9pvhp3h9mgwrtpkyaagvsk8e6p'
      ],
      validation_script: 'NiqkJct57VvnLWQ/',
      sequence: 7142365320213337,
      signature:
        'a4jadtcaywvuugas3nktrtyt85refg72m93mesgm5nq3ahmat9m3yng48x63qrjbtuu35qg7fb3kqevva3w2yq86thmqrjpjtdt7dp4s7txxxc72rwuenfmn'
    }

    var bb = new TxSignPrep().prepare(setValidationaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bnB1YmE4amFkdGJiZWNkd3p4cHVmanV6M3hnczVhZTVzZmthdGY3ZXVhMno3ZHQ3eGJmc3dxenFnanNjeHRoaTJhc2tzeDJqaGg5ZQAZX/GDxHNZbmRhY2J5OHl3aHV2OWNrZ241NGtrbXUyY2YzazNrbXVxMzc5dXJyYXczdTZ6Y3FlbnB1YmE4amFkdGJiZWRieWNrenk3ZXQzYmVzd3JrYzlpd2F6d2l4dWhidHhlcG03NGM5cHZocDNoOW1nd3J0cGt5YWFndnNrOGU2cE5pcWtKY3Q1N1Z2bkxXUS8='
    )
  })
  it('should build an object for SetValidation without signatures and convert to known b64', () => {
    var setValidationaccounttx = {
      ownership:
        'npuba8jadtbbecdwzxpufjuz3xgs5ae5sfkatf7eua2z7dt7xbfswqzqgjscxthi2asksx2jhh9e',
      sequence: 7142365320213337,
      target: 'ndacby8ywhuv9ckgn54kkmu2cf3k3kmuq379urraw3u6zcqe',
      validation_keys: [
        'npuba8jadtbbedbyckzy7et3beswrkc9iwazwixuhbtxepm74c9pvhp3h9mgwrtpkyaagvsk8e6p'
      ],
      validation_script: 'NiqkJct57VvnLWQ/'
    }

    var bb = new TxSignPrep().prepare(setValidationaccounttx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bnB1YmE4amFkdGJiZWNkd3p4cHVmanV6M3hnczVhZTVzZmthdGY3ZXVhMno3ZHQ3eGJmc3dxenFnanNjeHRoaTJhc2tzeDJqaGg5ZQAZX/GDxHNZbmRhY2J5OHl3aHV2OWNrZ241NGtrbXUyY2YzazNrbXVxMzc5dXJyYXczdTZ6Y3FlbnB1YmE4amFkdGJiZWRieWNrenk3ZXQzYmVzd3JrYzlpd2F6d2l4dWhidHhlcG03NGM5cHZocDNoOW1nd3J0cGt5YWFndnNrOGU2cE5pcWtKY3Q1N1Z2bkxXUS8='
    )
  })
})
describe('Stake object prepare tests', () => {
  it('should build an object for Stake and convert to known b64', () => {
    var staketx = {
      target: 'ndacjgk4um9y9zvdbvxkzefjdbzgr5z49c6gv6bqd4nymcxq',
      node: 'ndab3njsp3fpezc3r2et2qmetgbc7cxckkvryjh4c8mi4wqb',
      sequence: 6229113420623440,
      signatures: [
        'a4jadtcagwgn3q2ss7tvsh67grkjqdipwqd84bgxhffw8wtq4rvw674v4rw456ya2epzs4jetwkfvxsr4ap2wme8jkzydfpspe4437kpj7h8yxgnpf2iw53t'
      ]
    }

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhYjNuanNwM2ZwZXpjM3IyZXQycW1ldGdiYzdjeGNra3ZyeWpoNGM4bWk0d3FiABYhWHyzrlBuZGFjamdrNHVtOXk5enZkYnZ4a3plZmpkYnpncjV6NDljNmd2NmJxZDRueW1jeHE='
    )
  })
  it('should build an object for Stake without signatures and convert to known b64', () => {
    var staketx = {
      node: 'ndab3njsp3fpezc3r2et2qmetgbc7cxckkvryjh4c8mi4wqb',
      sequence: 6229113420623440,
      target: 'ndacjgk4um9y9zvdbvxkzefjdbzgr5z49c6gv6bqd4nymcxq'
    }

    var bb = new TxSignPrep().prepare(staketx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhYjNuanNwM2ZwZXpjM3IyZXQycW1ldGdiYzdjeGNra3ZyeWpoNGM4bWk0d3FiABYhWHyzrlBuZGFjamdrNHVtOXk5enZkYnZ4a3plZmpkYnpncjV6NDljNmd2NmJxZDRueW1jeHE='
    )
  })
})
describe('RegisterNode object prepare tests', () => {
  it('should build an object for RegisterNode and convert to known b64', () => {
    var registernodetx = {
      node: 'ndafkext5rchbz8fky3if3ukkj2vvkjvb6s2zf645sew3dbb',
      distribution_script: 'EFk1j64tytJmQPk+',
      rpc_address: 'string: thct uax xkqf afplsj bcxoeffr ',
      sequence: 5633755682856050,
      signatures: [
        'a4jadtcaudbn2fmhqaaqx8j462qs6wij9tfg9aahuxsmwprxswt9rgxx8d4mw8ems85irzegutm5nrp6czbe9je56yxmq8ny5aawrtbdwkuidp9gdd7vwpay'
      ]
    }

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'RUZrMWo2NHR5dEptUVBrK25kYWZrZXh0NXJjaGJ6OGZreTNpZjN1a2tqMnZ2a2p2YjZzMnpmNjQ1c2V3M2RiYnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI='
    )
  })
  it('should build an object for RegisterNode without signatures and convert to known b64', () => {
    var registernodetx = {
      distribution_script: 'EFk1j64tytJmQPk+',
      node: 'ndafkext5rchbz8fky3if3ukkj2vvkjvb6s2zf645sew3dbb',
      rpc_address: 'string: thct uax xkqf afplsj bcxoeffr ',
      sequence: 5633755682856050
    }

    var bb = new TxSignPrep().prepare(registernodetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'RUZrMWo2NHR5dEptUVBrK25kYWZrZXh0NXJjaGJ6OGZreTNpZjN1a2tqMnZ2a2p2YjZzMnpmNjQ1c2V3M2RiYnN0cmluZzogdGhjdCB1YXggeGtxZiBhZnBsc2ogYmN4b2VmZnIgABQD3vY6XHI='
    )
  })
})
describe('NominateNodeReward object prepare tests', () => {
  it('should build an object for NominateNodeReward and convert to known b64', () => {
    var nominatenoderewardtx = {
      random: 7664575722253654,
      sequence: 4786722739683373,
      signatures: [
        'a4jadtcapzsif4vukscbfz3xivzz4d64tj6ycdavdrn5rz2xxi9jyymgf6veza7mqg4fdiyagx6yabsycmspnejaifr55n9qgdjq3g46eebi696vk7neekm2'
      ]
    }

    var bb = new TxSignPrep().prepare(nominatenoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual('ABs65BlHbVYAEQF/vImALQ==')
  })
  it('should build an object for NominateNodeReward without signatures and convert to known b64', () => {
    var nominatenoderewardtx = {
      random: 7664575722253654,
      sequence: 4786722739683373
    }

    var bb = new TxSignPrep().prepare(nominatenoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual('ABs65BlHbVYAEQF/vImALQ==')
  })
})
describe('SetValidationNodeReward object prepare tests', () => {
  it('should build an object for ClaimNodeReward and convert to known b64', () => {
    var setValidationnoderewardtx = {
      node: 'ndai3tzkwu9win6p7i2bwrmhk5gs9bis5fjst7j8a76rvnec',
      sequence: 4402827188794727,
      signatures: [
        'a4jadtcaqxrywh55s3uvkz229c236diiia7usfnu8742iuc66w8ws4kaa4368qfz6t2bmg5k3jhstufcpp3i356px4miaudmabdwqgjg87vp4ianbqtwqpxh'
      ]
    }

    var bb = new TxSignPrep().prepare(setValidationnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaTN0emt3dTl3aW42cDdpMmJ3cm1oazVnczliaXM1ZmpzdDdqOGE3NnJ2bmVjAA+kWRaYdWc='
    )
  })
  it('should build an object for ClaimNodeReward without signatures and convert to known b64', () => {
    var setValidationnoderewardtx = {
      node: 'ndai3tzkwu9win6p7i2bwrmhk5gs9bis5fjst7j8a76rvnec',
      sequence: 4402827188794727
    }

    var bb = new TxSignPrep().prepare(setValidationnoderewardtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhaTN0emt3dTl3aW42cDdpMmJ3cm1oazVnczliaXM1ZmpzdDdqOGE3NnJ2bmVjAA+kWRaYdWc='
    )
  })
})
describe('TransferAndLock object prepare tests', () => {
  it('should build an object for TransferAndLock and convert to known b64', () => {
    var transferandlocktx = {
      source: 'ndahjx4jrj2jhtfhsgma82a2dvsdcweyrjj3vyetyks2zwc4',
      destination: 'ndam974vqsyczin3dqmrzsztyk3ke7a76pbi8ttj7bzxenn4',
      qty: 6090287018180214,
      period: '1y9m15dt10h9m51s569721us',
      sequence: 7443647051579152,
      signatures: [
        'a4jadtca68rwfyzi86k8j9hvxbppvfwp6we6i76kgxyua48rt356ivjgh2e4hba7635aqmax4msnrykeqxjqspvsfh5ziwkfjjiwzi9xu7cte7ht4kzuj85v'
      ]
    }

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhbTk3NHZxc3ljemluM2RxbXJ6c3p0eWsza2U3YTc2cGJpOHR0ajdienhlbm40MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWhqeDRqcmoyamh0ZmhzZ21hODJhMmR2c2Rjd2V5cmpqM3Z5ZXR5a3MyendjNA=='
    )
  })
  it('should build an object for TransferAndLock without signatures and convert to known b64', () => {
    var transferandlocktx = {
      destination: 'ndam974vqsyczin3dqmrzsztyk3ke7a76pbi8ttj7bzxenn4',
      period: '1y9m15dt10h9m51s569721us',
      qty: 6090287018180214,
      sequence: 7443647051579152,
      source: 'ndahjx4jrj2jhtfhsgma82a2dvsdcweyrjj3vyetyks2zwc4'
    }

    var bb = new TxSignPrep().prepare(transferandlocktx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'bmRhbTk3NHZxc3ljemluM2RxbXJ6c3p0eWsza2U3YTc2cGJpOHR0ajdienhlbm40MXk5bTE1ZHQxMGg5bTUxczU2OTcyMXVzABWjFXJMfnYAGnH1Ile/EG5kYWhqeDRqcmoyamh0ZmhzZ21hODJhMmR2c2Rjd2V5cmpqM3Z5ZXR5a3MyendjNA=='
    )
  })
})
describe('CommandValidatorChange object prepare tests', () => {
  it('should build an object for CommandValidatorChange and convert to known b64', () => {
    var commandvalidatorchangetx = {
      public_key: 'vmz/BMPLrvIHbw7P',
      power: 7147475985406603,
      sequence: 3268473309273449,
      signatures: [
        'a4jadtca6ti6awvxjssz58nasej93g8fb8s7y37byga5fhv3wika4hkd4uztr73acpxwwy7hsm4e52aryqa8phsm93xf8vsg3ptwtvptbu9akqwkayb3v2pd'
      ]
    }

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual('ABlkl28mmot2bXovQk1QTHJ2SUhidzdQAAucqL6OnWk=')
  })
  it('should build an object for CommandValidatorChange without signatures and convert to known b64', () => {
    var commandvalidatorchangetx = {
      power: 7147475985406603,
      public_key: 'vmz/BMPLrvIHbw7P',
      sequence: 3268473309273449
    }

    var bb = new TxSignPrep().prepare(commandvalidatorchangetx)
    var b64 = bb.b64encode()
    expect(b64).toEqual('ABlkl28mmot2bXovQk1QTHJ2SUhidzdQAAucqL6OnWk=')
  })
})
describe('SidechainTx object prepare tests', () => {
  it('should build an object for SidechainTx and convert to known b64', () => {
    var sidechaintxtx = {
      source: 'ndakngpk45cqs3z5fay3a7b5r28gj6fvxuqtrukmktj7x8zv',
      sidechain_id: 8,
      sidechain_signable_bytes: 'gI6JKGpImfPZQc/p',
      sidechain_signatures: [
        'a4jadtca96kwng2p4zvmxnjfzp3dtrh3nm4cfzc28j4uvzczpx9qyvg5xfkhk97phuefrbd6mqxmrt4zhp44vmfpygtn8q5p3sp5wyasgty7pqhffat3enyj'
      ],
      sequence: 666378943674263,
      signatures: [
        'a4jadtcaskhymrqw29yiiydcn58mvrjjji8tji2kzgzys6m8cdcjw38eeuwp5zsuz6xypr9crgskgn7xvecb35ptv374ut7vbg8fj759uakrygprdkdvqes6'
      ]
    }

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'AAJeEXA5N5cAAAAAAAAACGdJNkpLR3BJbWZQWlFjL3BhNGphZHRjYTk2a3duZzJwNHp2bXhuamZ6cDNkdHJoM25tNGNmemMyOGo0dXZ6Y3pweDlxeXZnNXhma2hrOTdwaHVlZnJiZDZtcXhtcnQ0emhwNDR2bWZweWd0bjhxNXAzc3A1d3lhc2d0eTdwcWhmZmF0M2VueWpuZGFrbmdwazQ1Y3FzM3o1ZmF5M2E3YjVyMjhnajZmdnh1cXRydWtta3RqN3g4enY='
    )
  })
  it('should build an object for SidechainTx without signatures and convert to known b64', () => {
    var sidechaintxtx = {
      sequence: 666378943674263,
      sidechain_id: 8,
      sidechain_signable_bytes: 'gI6JKGpImfPZQc/p',
      sidechain_signatures: [
        'a4jadtca96kwng2p4zvmxnjfzp3dtrh3nm4cfzc28j4uvzczpx9qyvg5xfkhk97phuefrbd6mqxmrt4zhp44vmfpygtn8q5p3sp5wyasgty7pqhffat3enyj'
      ],
      source: 'ndakngpk45cqs3z5fay3a7b5r28gj6fvxuqtrukmktj7x8zv'
    }

    var bb = new TxSignPrep().prepare(sidechaintxtx)
    var b64 = bb.b64encode()
    expect(b64).toEqual(
      'AAJeEXA5N5cAAAAAAAAACGdJNkpLR3BJbWZQWlFjL3BhNGphZHRjYTk2a3duZzJwNHp2bXhuamZ6cDNkdHJoM25tNGNmemMyOGo0dXZ6Y3pweDlxeXZnNXhma2hrOTdwaHVlZnJiZDZtcXhtcnQ0emhwNDR2bWZweWd0bjhxNXAzc3A1d3lhc2d0eTdwcWhmZmF0M2VueWpuZGFrbmdwazQ1Y3FzM3o1ZmF5M2E3YjVyMjhnajZmdnh1cXRydWtta3RqN3g4enY='
    )
  })
})
