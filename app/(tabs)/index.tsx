import {View, StyleSheet, FlatList, Image} from 'react-native';

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem: "https://th.bing.com/th/id/OIP.Oxz4RD27JiIxX-sP4Che0gHaLH?w=120&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
      { id: "1b", titulo: "Duna 2", cor: "#16213e", imagem: "" },
      { id: "1c", titulo: "O Caminho para El Dourado", cor: "#0f3460", imagem: "https://1.bp.blogspot.com/_X643PcxIPVk/Sm2sifpU54I/AAAAAAAAYP4/qUaFZbuwio0/s1600/zmla2w.jpg" },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem: "" },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem: "" },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikzgr47XJyTSVFJelDl2bpkKs-Sl9i0TJC3CqQmW_aMmo-wRRZkjoHX6Y2AhQA-JK8CMyFSVn_l7FGiUFkbyL5TRw3WS1wYF6Ok1f9Fm0_DIUskYXJp7wTh9CtkRBfQytEwXQO9ovA6-vhiyCq8cqoc7Jav5W2dBYXVTu8dTq1IDcDoWwYO7WedIUIA1s/s2000/John-Wick-4-22.jpg"},
      { id: "2b", titulo: "The Batman", cor: "#162447", imagem:"https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
      { id: "2c", titulo: "Deadpool e Wolverine", cor: "#1f4068", imagem: "https://www.picclickimg.com/ikAAAOSw3jBnBzJK/Deadpool-amp-Wolverine-Dynamic-Duo-Poster-Marvel-Wall.webp"},
      { id: "2d", titulo: "Homem-Aranha:UM Novo Dia", cor: "white", imagem: "https://th.bing.com/th/id/OSK.zXW5QqjW2GCYxKN7smuMdtEEympc4FxKvzZZj53boP0?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem: ""},
      { id: "3b", titulo: "Free Guy", cor: "#1c3334", imagem: "https://th.bing.com/th/id/OIP.HmHVyFjJ-aVRWSQvm6LXegHaEK?w=285&h=180&c=7&r=0&o=7&pid=1.7&rm=3"},
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem: ""},
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem: "" },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem: "" },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem: "" },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem: "" },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem: "" },
      { id: "5c", titulo: "O Pânico 7", cor: "#0a0a0a", imagem: "data:image/webp;base64,UklGRtwqAABXRUJQVlA4INAqAAAQpwCdASo+AbQAPp1Amkklo6IhLBetGLATiWMAzFD71MeW6fA+qQPuMdBd6tDemP2SyGb0r5h/Hz9Z4a+ZH5h7p8trszzQ/nv5S/kfmf8Uv8Pwd4CPuDffwEfXnzQ/xP+/6V/aj/ke4F/PP7T/vvXj/qeIh+F/5n7QfAH/P/7F/yf8P+a31E/637feiT9i/2/sFfsJ6a3/39yX7of//3Qf24//7a31TRvO3V4AkHRrQ30KiwgwYbEZbs+68gFAuwW5vlMXa9In64xxXthwQfyIaTwLd79ffNc3QHcp1/B0PaMX3ZLQ8sQ/TtyaCEgxDhJFRi63aYUfTnJ2HqlDf7w/stah/eHP6mfjEDyaeuicpkQ8psiz8J7GVPmEN6Zc880KbcsJNYWCZ0HsATVe4vA0pMLecH9rJOJB9HHnRXYRuP2Ibv0zhM+k8spTsF3mlMoPGyexLr5JmREpZtgNaftQTSa9kygKS6bCuXxXdeLjjHxDm9U7MH1zTfIxOmYSMJAW6LgXQ9VOaIhvLZtyf6pxxWSJFRRYVval3tC/Bd1SQWuB+7Xyz5vyMI2RD7DF3oW7esnQ9wB5nQG4anA/ozMO0G5/fQbd/sSyfV7WbxQDq8BFjY05hvPnM38ui6G+XOLwrB5uZtbbZFRM6efO+yODiw35BFUd2dWfQ22aDO9qyQXHOPVP/PTd9l+Vh5p1bhaNGL/kePFojpORiVEA6ca+xtqrN1uYIiWv1mtzpb/fF1I+2bRVt3wIb+FwhPQNJlz9dbZL9BnElaILI69ib9Pad8h3nnO3mOUNsPA6JCO0IyQQ3tsmFHEcl6c0hQ1/dB7Dt9G6YRHTAZvprFHjkPJG58/+n7PZQqpqBOWtZhgc9BenJ6/t9zTUjLS08G8yhSnDLu5NxPG2RD+kMUKqBVS637iIp5V9Ib4yA31lLUmc5jltTeJtp3XUVMqaVF8UkUOhYUhazVtyFFFzLD/96CGnIn6sJhp8iz+3nQu/Gq7Ge6z5Vfio24JrsO03aaI4QMG4wE5xu3iaeuj5fpXAZI0ggyJDDh3E0isz//lj/zhzfWYRL/h3IzdWvuikSIaUyuH+RY6w/eXdxMSceoZYZ8p7J/HQsszibXdMTZkXFbaliyVwcbfNA1WVUPG8lSxyK7meqrgpu+WRp36nQz17judhS8J/Ql6VmE9fuyOYONRe8GQ+sb0wDVUhSgaqcodc3u6tl551EgrGzNvRHeMQZ0KD6s6J+2Gdn4R+T6qHYkVsC/da5QCiONR9OsPDmOmlrqTXfRX+YPPPx+W+H5UIby6yopVvARjqffXjP4o9S9hZEVCfFT+jnqd0m3pMX3io8vInpFyoeKRWBBZfdPhTxR4jaBjqXuvxx8vj93h8w1WyAKMcTK5qPLgi3/HP6rXKl0Dbqk9pCqINKnzX/kRn5un65sAe1SjWBIVeFCx47u1q0lwrdhYkYs/2sFjEgh5C/iuaPYT7py/qte19YvLKzYxMfaprePfkKsrck5S7w+TcoBPjNp0cA5TAV3ab2Jaq/2bVAITx8KIkG3LZHyDUjF/Nr5bYyHXH6SvKwfDqQgCJT5msaI+ixTPKisVnB554FGqs+4VmCu5sjfNsBTHGDE01dXtQAkCaC5OhPYZoKeR2rgM0+uhUGQVLK9BUfq3OIsbRRcNSVTOiNVUAQDW4KaEIvTraNhjz5QJEZvhZVkCAr7Ufyvy3DEW63R0JSi2bplo50075GYneLiSEtLF/yj4Hf2Nhg9SMPMK27Zka3oxoPzCJlf0CB+J/7Mklu0v43YiQAP73s6ONQwQ8EP6zI1ayiZ2UfdpGeXosmlnJ368q3NaKbVQNkPjqVoZ+Lbs4NkiRXOsPEUzpXxcZMaggn/njavWW5VnEIo0ps0fYe5dDcY/56MZLaKvN5mBkG9/9RQ79HsPTBX0QGF/RtV+zMer8ppAXE17+eUUvl4IMMuHNDKdmLTJV2e1qUCBBG6s2Gjdqlurpk2et9J3Y1ldA//gH3M7r5+hbqweDUMZY9nx9BfbG0Lx+KFhE3Ko4i53SUUl68xaLhUjfQLZYicSNnvMGUtojOHwUL4ejdvbF3zzwWvjEu4+FsZldUsfD6BGWrjEtPQ329O2D9cRgnAvNKMx12X5dO6LXEDY5sMFroFvr+pShUbIb+qcg83JnHcZXly2AFGgO4AV4nv7IwmnuI2Iz3tj4TGyFgxIJonO3IjIn4oCsyg9zE5W6WAXR5IgTko+dTUjB5RhOk4MM9qxFZicyrvab9C+tpqaq7Io7VR1Ti5W7QVxX/rCDOCF4ikFbOaH3cv4ObqRLLKVr6X+jBWfFkMNJx/KERQDitEYDhHCvOkJvIpn+jsAPkJbTt9SQCNy1dIH4L9QhpU5VwlO08T61G0NfEeco+FCSBXGRQ+OOznTyDFh422xn85YjmRK7CDHu5xLzSpGuvVL7gLiEJhqvX4do1foprHdTFgvAZkbiCIg3VX34VQxJhRJ+bNQ8gdjctxdqV129bDOlkMk1LpzkCqz1FqhmNdDD1osca++08GtgdEFIH+V+PZnu8JKULC/3+8qE0cn0d3XqZnhn9UBfTPrIQUQJDppmpXk+FO2KgBXIJDXAMRF+1HPQIaE9hXD/6ivOC0noxxLm7BTNTM4JlAnhcrfQ4UgVX76js+ILBMqAdBo9pS9D4L/M3cdONJMZ6HL6l5BKES64eHWmt8u2oH+VQbRiK1VvxKIw8A0I3G7/1lvMxdvGwmXMWJjWjqLy89Et/jTHn09L6f6Nap67Byr7VcEVeLhkzBMtCoK4W2hYzfqQ/9AHZdhxwBt6szVtTQZBTs0YcWEKP2YmcJI3UGc1MrQrLOtjGbUb/3fhvqe6i3Ho9Oo2TBlRXUh6+MOTt6IA6x1koUuwmQmLZLOEjNYj61GsnxVA49FxTb+GNgl237JGuOl+rK183/7Lu3RIxNN8km3aA3YH4tXZaGvyY6CWiHygdXbpiu+CsBbtwzcQGe/yL+qGiKeTH5gyYTIeKkFenhQa2hHqo2iWx41fTlw7VZS6twXV6W8+mZEUX7wnulNOT1QR4/oCX7Ucr+gfhEe6+IVDpU7P30ZHPxRftQ30zja9fE0pztZ/BgiM1/wh3ld2RyFoi9BYCqA8P3mFxobX+CYOELlwVmTvwxFKSgDJWVK/rQrjWDuIBnibrlb6Q7jhLgc9AeStYtaKJeTq1EPP718zwPuoXohBd0kmDJejnegUcx9X4Bioblqp0LXsPqSyYWneUY8oaIlTAr2mwko1XAJEqqgpMTJEwstEAz3UUMTxfbNr+6GZvSLbxfJNEsKUHDZchS216LJVzdq4U4+MZBAnGjpIsOcXjxym642sPTX1Z2gGV7fM+90CTW2l/uZRKdbIfTHEyQ0jIvX0KYCZ+zXyi9oYDPjtHn2R0BrZUopi55Eo0L9HBHugfRtv8tfEWjd6fCEkeTqhiDj/3AoAuymLbQcQkrIYMyL6teHFKhS3sfAoqVcrJwfOXWiKiOYesqHv/WQr0diKt6345jpwQ8jk9nOfDew0HBuQuK3XPeF2BBMsUpzJjvbrRPxBSjv2/kgXqZu0D6aBSWQpfsuY36IK2KA8XIi5HuXIAzN+Pi8eNU/+FJhp2tmqmTjjYNoRS6h1g0YFTOAzUDSHlo3hycXWuljBVfdppkOKNi0kFmgfFQFcGbAjwhzVn9ZNCBA2vfjzRwBeFRTLsoYBxZCwJkJTcxMPMPY0+qbemrLc5dsIPKyZbT7scGyQD0d2BySd7LPflSZ3a7GylUrvJtDUhRsuExAwfrcrL0lKgvo2ePmd7FZaGCF+kkGqUqTRlW7rt6DFA/1KRs87Un+qI8bSYCXJ0ijOWPv4buFYF9ZoGbbX0GyyUGOotio+/7hck0ej4wzbSBKCVMsvKwOJGskqi6rFfJAUXfIrTBOwRI8BnWzQQAm9G6KNfh1Ga/sj7kN1cOUoAhJ4fc4/RrCXCv2uYEKoRgKaw8wsE6fFn5RRjKPoPDAickceTKstOZKM8Awyv7hT2S7EW8fftOV8i7GLSCaQWn87KmQdGNOg83pzv8QEsflrOB9FN8OJ27+f8tQhS6kL2VzlZHjiRbjp2/jZbX5CD0SK36ni/28kV5KiPovq0FHeEXniZ3AF7aG4Y5591jhDNqPeMJ2h9QsTuvDBgd+YBosFUKU7swBxCpACqP3W/hqhIDiVMOVEUZQ4LLySdjEGEQuD9qjQRpzACdPIC+MwmlOKkSfoI5kZTaqk5AxIlohZidLxuK5UyaY9/ZkuCQ4o1TEsXerxKjWo5lM2GyadspPaL5QxJhtHvM+tO5p1OYYfryyLxNrkd8/hpxSwPZvavtt7ZVjarcr7Lz7awRSmvQ+AX/ajjs7DErVDmRxL4DhwJHtdh/skdyCd0ddLv2V6GwPGhjGrd1uLqllKjFOB2+GVTJMycZGEzjzJYZUe56ZyEPkxoXKVNd3avkadZrFAtokDIgUgzQjeanWLDrsDvHQfVEdHCoOuJL842mKBeLi4+PXsWD2ev4wR2/tg6JU1JWdrkyNQ1PQxHGhy86pWMKcE+eeB8yI+TYDfWpvcpxvq5IprQHB9CuxgYwMvzmx9qMK75ISHkLoEy3TH/quTvEa4jg69YbxXTInWeh3gOQ24mYs3O0kGhBbzrdHmZvsnf+waienndWmTAAm5nnTHJ3sqOcqbRpujvsxHztnAhmnHrr34wce7HsG+EzZzdsQM+USL9XdzWD/p5HwQhTeLyyoH0/5elxth43HZYv69TXH5FDHCwL5ktvrdXyVatRVhWqAnqM7rjnBEQX0y4o+Tq3YcCbDvh7FheGW6IniPCsnaIXhiQw0/SUXTxS/KLd+9ufpd/eDeiL3FBaq5bPMEGemZpU0WC2TOgGo5LxiJvILAz6CqXF5Rb5G0pUhHTCM/d/D3430c1ISCkL6qTNaY41bYzqdjuTdSCw1ugILPAU8rVHQO4Ds+7MANRoJ0bsGw7y4n+BjsNMyL2YsFp6k5cuNfuOxtvzsW48FHkhazw1rEnbevmLme/ASJpgADsnt9M87rh/HaUG8zTspstw1vNp15GaJQi03nS2s3I5ZarXai8Bozl5s8GN38WhZiFE5Fsda/57JK/j7DpAhbBcqR+d1L229nTIu6cABFNLxfTRlb8KyvU0Fdx/D5xk7TlfaWYXsL+aI8LAXka899qSgScD4Y9oCoc5OF5m/wI0nX5cxhLtVY/jWJxTJnt+TaiFN3snx+ZB297yERVl6D1TYfTYO6y1be5/U0ktHAhnTyu2aQK8w4WPhgWCBILuMx21+D/NBw6cOwX9/g7QqtVbD161+BDy6m6lyjEPP9uDLeNH3AxjVmYzHF+ygE9xAhvxBvuGNfywL21HCcmhk3mLcc3+Ut1fTimkq4TbxsH1yiDkXLq8wki06FtnCcDb2ik4hxB7iCn8SqgiV3gCNMVjTsSwbn/+PFvRa3ii7NubYdhrTdSLWQ0PTKEMu1LMZgAQtM+fbdBgh26eLPxJjQQRJWV0PDi1xgwmtUI9/Hmwym0Ffk8uf8W99S6bOTt50Z1VCKRwjNi4EkK3Nm3cpDnfZbhpbm7FBPogP2lmjGUm8Y6U3D6bRsvK5jNvr0n9bglI+aXj6WTA9P6kMEpw4GmC1n8N94/VSrygneJBMnlO4FM4vY10qQuu4iPQ3dENjjXDK9EG5DVCF+bBQLWOoz3Qpem1bwtNYPFb9HKq0lTdsrEo3Ic0OASKwZsryzbckOTjrJ/zT/nQ9EY6bbglRNQHJPw3M88E3MNmsRg4qSHQFcCT+F3ngfuDoHxmueO1y6754o2veKY3ON9OdtijFcNFWDvhJ9E0I2XF7xij6BEU7iF2foId6/mwJCsHjmqWXb4h8WyAE2LhZ2iv3FTWV6iljczeHKTUVoQA88gafY4YQsTcAzTm2iHw9+oezkYRG5N/Whi4hQin1EVmdaTA+lxDNxhbUMOMblGz+fvGaXEZc0Hb2vjqy4dW7Dci+I+PqDMxbGmTtjz6p6YG+4EzHgxt6O5anX1cNyeYjaBNqbrv2pcVOdkolglPX1/TVWpuTwTbbUUQfZNNZDSu75xFTHeqKQtIjYVI6uMqT8u9GVgSCTObMdqfy+EKxbU6GX41s1vwdMA+MAQlA/uJtWNRhAKUYdfL5k0QK4SZorgsydddHNlJoB4YgdDUw6t+hvBuGct+yPthwEkeUVZZMD4Q9oFsmpzd8zkA4vFA6hEUh0EddoQYVUc6CzLC2me9oQ+o7ltzXCDf/ypgyjbufAWUg0DnYhA++7PDii2Ork5cvUaC6OYD1tIkfQBtrkadbGUw5Zsr24UeYnuAdqz4kyJzfbZZROi9dd/bFN6G8w41spMZuSTPmwCBdxdw9dju7iORyHL0tlF9NczM98V+8H6f7ayzFQW7GWltuGJ7N794lX5ZK1wxZN4VjnkIElT2cv10F5ys2th0+brtn1O9YHjFYrtGYC5KaaB7KUCVlRRPtbXmv5sPZdsKs38qq1M56aAHTNLZOHeeJt3yoYrH6iwwSQAJYB7+mssLw/8de56To1KujgYjwKMIt24j482ufwUJV+3eSOz/JMAM5BuVf3RcS9PhrVhCWEGWE4wTX0YJmvg31Hwsz0nruo1QDhqdS6UU/pedt8ku//so8krIAIjGHG924jhTr2HMiwGL0FR1ywziRbd9PneHG0rb+Go9Hftk/FPWGvzOwHbyNEuPx1efjYq/wp00vOFvPXxMWUFhGqHRWdq1lJAu7v/XkoQuP+CguO0oc1wm15jbaE/anEni9V03WvExrZBfXyPlZXHOU1MiMedsYza6WlZSRwawwVkIqqrQtM7TTqpe0mUo8S1T0eA8J/GdbHcZbI6jnMcTlJ5YelqsaWn6Ox/ZCNkClMZADCcNKSg1gHD1PcPMdDeHacm62oiMv2sKhFmVif2Q98O8nmNK4zDvudkiXZZbJuLnHssRaiOIszAF6spXC8hgcNZGwtHnahoHvpwdFqM+6OhDbMXIN6N2ThCvf1RBvaAHPgjLqs2MbKJLugsgSJc78BlRwMUT7BmbmXmtccpc5Vu2cjVIZDoljENzdxaWPtrE39Yzqch4T4ZKF25mg6FkbqkF3WKtYcVZ853uaEbAOVNsJSFxNZnUWmUj6KmLqdTq8nbaQGqr07aFrxlVPM3kSPA+GkJxmJx/mFOIzFLwBCzqEWtxB8TslN69AfiRKZk7vrEaVeeVO/RQIXs7bREltbqczSxiRmOa/lp5NwTA8J5GsM6jOFiIrUqDGLhs3X6ft47ySEiCJwr73qS7onweXMhLeHR2EGoNRxw4JXGn3VkuI8ppyQ1XNeGvFVbw6+i6V5PA8Ws7KVd3tlY5VDWHcs4sQtyG/N0wgQog4D0Blw9frmpewswQySsCoVsvyC8pIgGYY/5fjndjtuXVnWDtbPipZCUTzPfUAz0z+zEFkewyWOA1dRmHw6hdqnHLn9S4vtnvx3dhQvueYHtwkdGw4zbM5nLLfE6qfUdTvz8H9SgAEMc3s0wga/2meew1c2ycoAoLZa7AorE0JlZm9HWPErJcgW355+KekCILKLA8DsVkJOYiPMD6ac/XE9wNaBffvi4HFDPPQNdWCs5CDcd8JH+1sFQU1Bpegg9XQizH95S2Fd77PgN4hkwILwRNjmRet0CsznvAXkNGOArLiVNg4nc9EarzkU/3/8+5t+vP3nPzx7JnWFfF/3N34GsZm+PlxGCJx+QCgL5n0HnGuYSkSZdTuvAEna1t0Bt1UHD2IKa3JMfxitV+wWOW64qeAnAUEX071euBrDv+JzxK0me4UesM0a+2RSVcJCTi1BDakLTocJoODLx0429Qr7UchaqV3OHNOQNkZTkIdU2WgIH7oMfc1o2RJOnD03WMY9NkrQyld/KdZmqn4smX/E2GYtL+TDkqDbJ4MAgAipfvBRofGM+U788/kJ0EXVAs4jwpMOAIncdMjh+luY0r+VSSxVr0g2qn/edP3/f1vm9cb8bF19/Wxylqns0ZYQD2vxooKOdXNGQkx0kO7G3KGov91Hr5GwOdaeUPzCLQJiKTvhGGTkOBQXXEayeBKP81DCzD33sMZYrXJXlH7tsv2GlTZHvMKfHFD7QzZT69Dmdhhrl+2EPVuQ2zvJ5zk6xsh3Ms6NdmFvYuucCgPi3MaR9Tv5snVVRPaRID/hIbF0k3+DPQiynBZ20rxrF6fpfrfWEfOg+MNRPN5qJ/LXvuTuoWKxHNzShAKPXmjje3ZD6VXu8bnOeDpLD03QghbTrRFgl6JUerQog25NficlfDGRWTiJsDgNOU54UVk/BYD528Y0HFMKxFVypDYK4taM+7Mfy9oiHgfz+Gsl8uFW578Ds0jutSKToVXY76fY6tmfh1/ugZVt4np+LpL4R9T9RpFflt13Hc1xUF6Aow9k+RZcWxCqpiW7RXbEmSjyRL9YrztLJP2gld/O3N//pt2UtYjoikEL0IQ2kjWinH/tJXuiatXDWyTq06Kb9Y+2Oe2WRsxEqPYCCe5jleMAiHplxlOwlG+5h+4Dajp9INh1uU01OMGoDtvleJeRCg6XtbdaLueSrMbJE8wHYqDMa/ocGwFy5KEVAFq30VOEeWN+vAzabHBM+S33w51LdHiA8+WwgjEQxNhvozVuU/IBLJaXEgkvqqASHPLZc+PT2DveOPNDFfFvM7BuCBImdxSNPub/7rvJ1iN0hwIg7Ssbob9OasQqCKDeZTBWeOe68L9cj3Jc/yk1+xizsFlVOQkGJyhpoIXVIcILbra6BTr0GWDoZOYqArO3EHh4i5Ck9SK7BQMW0FzX7xK0gusSK74an/sE11Uq7TmifM4U1ZGKfDwCbpbDne9FE4q/5McgCM5g/9ZwjNTwpmhI40lUomGYZDe8Bkmh4Q34IjWZ+I5b2QMxrQfovQNuOAyEOddStqxWnSQ7FM+cINvIDWadm/dXDJ3RFkJK+woI6vOC4rBb3lsWsiuLUZ3m+Fb/QORy+5ZRmIb38d7ng1C0Cd/BedAkiEDzmpqR8v1BmBFO/A94WSP9ocXVvw0VY2oZpe1pgjfhXts7Kg2pKXrgYjzkrWO6dfExnfDPGB5ZP7eggrZkVkJ0z/CEyY15WH7htkW2UYW9Wiw61vxp0NQntp8P4CW6CSiX32Zhyjq5P48Dbu5x4r+R3QfUwV2BDE6JQNbCkS3aM0PbpV9ncCieAE688R+DrlSxXyVMo6aZJTsBwWZ054rQdQo1Su1OKgOwz0/X7ZLaDC+9c5iWEaECByzB/2XSMKKoVpAapdXFKAszXMz4HW53CBf0Gez9HfCUHd/woiaiYV9hQOsN04CiU8rcwoXsmYqAiwWTfqD6asD5dKLSeBeXFNdWJKefeMV6e8jD3gxyalR4ORbVmHcufTBcW2+YER0Qqx2DHYyy6GYOoGXrr/r7/oBkXKLelF2Aqn2kgahpLf2N8DZYBRSPE84R/ZuikN0HPu5GbwOhEVmL//FKp/zBPvpuPXvxM2OnuPr0yNONX3h54ZOJ318ignXhM9w3CFMMTA+CkEOvPnPhqBfIu1NooN34SlBZ8qJkP3gFODDt4149axsHCj+RvnsxRuA8PUSYOxxswRD3GeSZSZqzbWZ1s8vJOcpGx7gXFM0VuR6JcE9sFvRiHrlcjIhborDXMdMHTgcNZMrQIMpVeZpqwi0FXhzKB20ntMGBwWYkj5qv0S32Wfk1DJqSfgV2N9jWd+Wzic2QDHPVxKV7ElJWlxglHnyURMljnLol5iG+BhqTYOeGXe5B5UIM7M0f8SZwZ3XMe4Ogw5zhEjKQsI0gWxnfAk5yu9TRxm67Ni4Di9uRpqX/Gr9qpjvy1S3jXdRCRNgLDSuudZ8MKdkIsZfwT84Xq3lSCZeSEiLZD+2+X+Xqi+Iy+w2J5QHwEarZubPbwxe3ip5cGcdqUIo/iRsIlPX7ed46483n+xWGO2JiYIZBwsvXZYPvGCtxELkO/U3rvog/PH7tE/yuwWTjAbxMPEuZuI+vEUMTpr8/n8GuGBR9IFTECb3rEVgrwtU3caJbW0iBDdHWYxA6eUlkFcWnFyaEUYM/yMWUJvt7Ot75OCGlnSGzXlegFp9PQR3t3YjgTZFmXPWWD5Fu5oDQBxWsoQ7ppTjJ5qAlsB5XqHU7Kf9rEgCo0noi4bg7WbrAzYlvEqndxLSvkAg3qH0JACi23hyT01ea4mzTuR0qCKuWD3XvwZy1jG5MLgJiZJ55MucnOVnKccLDjEktWjSEvIgSFd/Uce636HIobLF+HrqlgZfimKWzu7F7feepM+BPUps8ec0g8JlXdaOx0hy25VUKCgLn+K+rdoFekxqwaMwb/vkshDAM7jobRYVuJQUyQUh9mYytGnYpUwsDTZVAqQRb9YcYJIY/MFqWvoDlXddKpdLAImYnsMIKnIS70q2T9ZgDaeBp8HwadzDH+Eq7W60lwPb5I0BrJ+JhXwAGiFQIgROK5Kfjz7CwwpK4SYQNpm/87dRglvrg3Mvc/1E7FkMKAVXvGuYeQOR886pR9n+B2Mdu3+skGftNjCZTRO2LJ6Pbrwa8AeDnvss4o2MPPdg2p1knOHbDr4yD0bvmi6mbq4lam2aDkxaeYLcAg05Oy5f/nb3+WIJfnZxKMg+5p7uqncqq7mxsCYbQJj+MM3d6NnMTJZb6JTdskeNJkU+0wOoFvZGImyeA4GnHzl1NvG3ty5/CSzmlTo0Ru1v9N+s8frNPZ4TYKHiKvPbVJfnMGuitdZgwKEmJKH4ZxfWkaFUN3+kU32HbQyWOST8Vt/kNRpkVLzvVJX1Y6TUmCEygGlKvi1p2xUBwfLwXb0eUS6eEN0IXocXOuN6p/VjGFW8XqBdPKS8AA6EFgwMc766nOxDf1yZHPrTTeBLfVEnFS3tw4+0wGn+8RRsMATag8WD1DeulcAD12LtzLjEqgqb7hO7IVbduJbM1bhjDwL+d903Yup15OkR4uBbwXyeFc2KN5RFWU2B3r+n/8mtz440B9soZY39JxElS+TJbu1LUWsNni5oDmu23KG9r40J7xbAl3ftVAM/8EB7fnJrWUUr7HPBWru0uR7ofIRA3TGlVYTCNEeQYdsIOLaU1Y5ZZfen5/tjkNK9Fxr2CQ2SZ82xCSn4mk3f9WdME2NhD3mt6Yypl6ajT5kfUfUoxcjz0Pde1Rcyk/vAWJBqWnD8cKZzQ8m2FqckF0WVordkbD2k5zk+4ftFFmwluFdWSz6rca4YsoBxWHLuIiUlZ5EcJTy/GS2oAGG/tiHr6iZbWdLL6QDWJ8jHTKRvtwvAG+BvNCV7CiNvTqpvYmu7i9L0lDdVzbEFnZvj90PFB+PyQJn/K7OLoHX7JBe5Kruee8yOvfA24NYvOG6Mf7R2hmfEguE/9KuU7bG2gHZVYevKgaOOLakwt8glQgwR/Q7B7t7nnwZILqLXSFRrj5yMRB088NjGWxUcWqhIIN0DuGvurCAWlb9x0Ku48atMGy3V2sjPSxw45Ly/GOjt4qpz1xBBdBVBj0/OIxQ6cKfgqh2aqFticq0rdiqz5mXUyu5eWEvcpQNEYtCZKFTNc0V9uTkNPW6nIkyasis33Vpqwt9sio5ZLcsHOxnfzC6OwpG5z7CInC8qhiDxl1Yb4qlquyLmZmz8hmhZcQM3UIoFnTbbwnbbsC4nJSIP79LtgiUWw+SA7kQzy8P/2tfAmSIGRa4ee+IqsxC8rGkEBs8PuNiSSBhuv7uNnD4TmfjrVda+C2apmUrk0TF+BJE5vPIu+3HYKSvIcIC5Tlw+koCNQDpPIlupVNlgxSfjfxa2QBmSWYzXHGBwaqsnYvrNC3aIq93t/Y5+/rkyp/Gz02ZN721P/qv/ku7SKvnJxUP557JBWlDdqEGSEw2kcFgIii5zNh15tnG5s3Fwvrj4+RkyaO1t88FuYz6UJhobCYB7u3oYARqlL0uNwDzwP/OpSMwTHQOwmCh9jPRFsEq2xm/GQ2UHMMffrCgbOaDwdHUxyCII7lS6zzYpNUKB943S7IZBMDyrBw28lH+0gEkqzCCisqH5G7NQAYFa9GHhie6B4mvIpTKKohcJfzKQ003lDvgwhEcYfD7K75BKRg8rizXmQDppGdEgmXMpTJ40Labe2Z4nwTnqIV3sbtqieRnQpA1x8fH/RICGkkprXokfeHpmklYJqvfNWBbRWYeWEvzT7I5CsiVnzAWgVHOc7DuE9h4ADqzqG5oQdxbfhyNb+b0rqJjJr5LduMl74YgWrSfXHAmAC31kkw9EFZ7E0pxjQtym/f78KF4n3u3a5MaK9ILeSc4P/gdpFp08I070rKTyiz4UMCBn5+c/YWWweYrzUGnOxt9yfORRzXe/DbU3Qgcz0PfkphrrqzDX2qRtiVskJn/W0PeWDOrDcZMIjAkQORq1UMPqc7/Z21pZw8neSY7zxGLtgluWSpWVZ3fJxhO1hS/vGO2pn/T/hshq+fg9bWdNvjJahMCIjArwLa+dn7xrv34TbIgRaGU+QI6nA+WkFe0Bc1Pt1yxyZON4XZZx2Ej5LfO53z4qMQgIRQKu3RmN+bYA46+7+l9S1bHziIiP3WkEBqisGA3mso63mQpuzKG3iqvjCSbs5VJPMUnFxKxp077yWRKTMX1biHu2pxQ/d0/Xc8q6dMre2TIZMwEQH4ZcuiO5Ll5X/ainqeWJ2Lb1qcIAqnDG3LX0oZ+dxSJW/GoaTruRf8/0MdMO5yGhRZNIOYxp3PGcHHorhN42vIn9mHd79LzUqXYEybe6WUVn98WGoyC7EckPn+Qa/IneX8DxgUAo7QfNJgb0YvqicQRjoBofIdQLia+xlO4cmACpYWnFzaNlO+YMos/cP2c/tI1aHznUYYMDKtH2HOg4Evk+unv0YaLsi4BCAum5F5SYBqd/T1BaxI67Ws9C7fYTWVmYqIa/5/FPuUfE228ZTNdfKhkFRoDKIwCglWrYy7bdBERvj5k3M//XJ2YbSrt8wFjeXXRgBku0Rj1ph8YJLq238NwYQjDma18pz2dcIJmsyqXLujHBipbnV7OteQJJKAVVj+tsLSFQD8mOmULd5GmO4em4L8GJ2Yy1mTvbggFP2qo/np5a11sfCycbHsd+XwY2WR3YEffknmORwCSPf+0/WFpSXhAnigxhYYC7ZYWfjCQj/2cs/FZyBl51lF5nuKlzNNe/NBbqxTqjpHVSti0+MVEgjXMl8c+Soj2IEbiESFvA4BLDFPE0P4q8zZQDfQiKc8tLpKOGHme8e5pgp9KCe/iwa7fMlA7sWEafiWNPm3YQAUSsqjK8CTuzO+HAKswEvvJFpPFL2mQAQGDTHa+8p48qtlNBLkNN7zJufeFPN0FHmArm18yNARhyU+Y6tKd4KDKayFJHz36bqQlrM0/Qmh2IpPrdWcTnnKIryX56esD5u+AAnS4CstBfJ9CRPWlMZIDj8G4vq4NP58wvKlqKf1ZbxZkdGSBWsduo3JsMX9y3nmRjVKsGcV3H96ygDj32+agL3EHywsz0GTI2252T9pa/bFGQYjgDJNKA+iLxw3+TW58i83K4V/kmUOYoGpE1ha9z7wCUSICtkgqwAC3h/kctBx19qCXXTBZbu4r3CYacF2quOSEJVkI3PO0HpAAoE/GAIscjWZicc1AEoXnHImZUaLzZ/Mca9nWMtdOIfkjNKwuKQQvEHP63ENAOvGGtd3cgvYXdcxNMBUT+bX9sLeaqmJHqoyKW6tgzvpzf7kSMtYGwwu5N7OGDBf3XsOWOvZs3ohkF7kU+FuKOP9d3Lp5MWHFIux8PfgHXxN0/TxzA4z6AoOnpSpm2A0wntCn4CelKjdnNLDOF0+Wo0FG0Y7nYCHtPBc/YkW0NyHo97CQxSwRWaLY4jw1cp3Db3X7kv29wOzT49a1ea3O6UP+6/WpMdagcgTYTJ5CmXG+0tr575zS8mxttdS2G+RSkK6GPkmXZwWbbUam6ULkSY5gCDStnYD6glsBaBH5ZRiLZuulX7CVTC5phI4phZhKc3qyAKbP9B8vQqFirikMzmjIwt5ZnszggNcO9QKymcBqAIppRafEQPIh0W2HfBnMb1kz75kEx1SpCdNeq6WvTKV/xrusuA6FW1EUdToD0x3D39EmZkAyZQjXpIkRu6aSZzKx3UoZW3by/OoBHdfGk2/U7UTBsv9AJBQ65PEYzzoT7DjSwEiswBaAdny7Zk0dXYlsYXllZRigz+M3iJm+bkppIwpkUtgjtg076DrQh8zEtbWf4Xsj4XQpo1z+XUf1NlXfbxMUIT/P71+4Hdmd2uhw1em82Y4jBEhSrt48GK0E453w0JfTMbNaz9i5vERzq756L2r6J4nGOyWvmXP3aoOL0zcRyIW3ocZPr6wnM8kZcT14xI4IK+895/ekr3SvoTHGqXygDDbna1UGzPHY/rHquZHmlj4l8njV9C59bLLezjUBpbE3mYF32/tmkp0aTVHNmI8/82fkNGVSkUPjuuy7CGscl/xBrLBaXoAAAQVr+WBw2pLo8wnt1QBPwC/NKzguUaUhbbgE9gk5oaJgnY+oLbc3J2D/BmlWc/XM0WJSvND6axSv/uykPgeyamDh90Tb/ZGzxQ6t/EzhQPAmCBHOuyFSM+mT1xwAAphykAAAAA" },
    ],
  },
];


export default function App() {
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
}


function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Image
          source={{uri:item.imagem}}
          style={[styles.filme]}
          >             
          </Image>
          
        )}
      > </FlatList>
      
    </View>
  )
}

const styles = StyleSheet.create({
       categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:150,
        height:200,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8,
        backgroundColor: 'gray',
       },
       filmeTitulo:{
        color:'white',
        fontSize:12
       }
});
