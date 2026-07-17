import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  private signalher = signal<any[]>([]);

  public team = signal<any[]>([]);
  public favl = signal<any[]>([]);
  private busqued = signal<string[]>([]);

  public busquedhis= this.busqued.asReadonly();
  public favlre= this.favl.asReadonly();
  public teamrea= this.team.asReadonly();

  public paginaac = signal(1);

  public elementosPorPagina = signal(9);

  public ranking = signal('total');

 public filtros = signal({
    texto: '',
    editorial: 'Todos',
    moral: 'Todos'
  });

public totalbusc = computed(()=>{
  return this.busquedhis().length;
})

public totalfav = computed(()=>{
  return this.favlre().length;
})

public totalteam = computed(()=>{
  return this.teamrea().length;
})

public totalheroes = computed(() => {
  return this.signalher().length;
});

public totalresultados = computed(() => {
  return this.items().length;
});

public totalmarvel = computed(() => {
  return this.signalher().filter((heroe: any) => {
    const editorial = heroe.biography?.publisher || '';
    return editorial.toLowerCase().includes('marvel');
  }).length;
});

public totaldc = computed(() => {
  return this.signalher().filter((heroe: any) => {
    const editorial = heroe.biography?.publisher || '';
    return editorial.toLowerCase().includes('dc');
  }).length;
});

public totalbuenos = computed(() => {
  return this.signalher().filter((heroe: any) => {
    const moral = heroe.biography?.alignment || '';
    return moral.toLowerCase() === 'good';
  }).length;
});

public totalmalos = computed(() => {
  return this.signalher().filter((heroe: any) => {
    const moral = heroe.biography?.alignment || '';
    return moral.toLowerCase() === 'bad';
  }).length;
});

  busqueda = signal<string>('');

 public items = computed(()=>{
    const listaCompleta = this.signalher();
    const { texto, editorial, moral } = this.filtros();

    const busqueda = texto.toLowerCase().trim();

    return listaCompleta.filter((heroe: any) => {

    const heroen = heroe.name ? heroe.name.toLowerCase() : '';
    const resultadon = heroen.includes(busqueda);

    const editorial_c = heroe.biography?.publisher || '';
    const resultadoe = editorial === 'Todos' || editorial_c === editorial;

    const mor_he = heroe.biography?.alignment || '';
    const resultadom = moral === 'Todos' || mor_he === moral;

    return resultadon && resultadoe && resultadom;
    });
  });

  public totalpaginas = computed(() => {
    return(this.items().length / this.elementosPorPagina());
  });

  public itemspagina = computed(() => {
    const pagina = this.paginaac();
    const elementosPorPagina = this.elementosPorPagina();
    const inicio = (pagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return this.items().slice(inicio, fin);
  });

  public paginas = computed(() => {
    return Array.from(
      { length: this.totalpaginas() },
      (valor,i) => i + 1);
  })

  constructor(){
    this.histori();
    this.favcarg();
    this.teamcarg();
  }

  cargarheroe(heroe: any[]) {
    this.signalher.set(heroe);
    this.paginaac.set(1);
  }

  filtrosap(filtrore: any){
    this.filtros.set(filtrore);
    this.paginaac.set(1);
  }

  buscregistro(busqueda: string) {
    if (!busqueda.trim()) {
      return;
    }

    this.busqued.update(lista =>{
    const nlista = [busqueda, ...lista].slice(0,10);

    localStorage.setItem('busqued', JSON.stringify(nlista));
    return nlista;
    });
  }

    cambiopag(pagina: number){
      if(pagina < 1){
        return;
      }
      if(pagina > this.totalpaginas()){
        return;
      }
      this.paginaac.set(pagina);
    }

    siguipag(){
      this.cambiopag(this.paginaac() + 1);
    }

    antpag(){
      this.cambiopag(this.paginaac() - 1);
    }


    cambioranki(stat: string){
      this.ranking.set(stat);
    }

  private histori(){
    const data = localStorage.getItem('busqued');

    if(data){
      this.busqued.set(JSON.parse(data));
    }
  }

 private  favcarg(){
    const favs = localStorage.getItem('fav');
    if(favs){
      this.favl.set(JSON.parse(favs));
    }
  }

 private teamcarg(){
    const team = localStorage.getItem('team');
    if(team){
      this.team.set(JSON.parse(team));
    }
  }

  private stat(heroe:any, stat: string){
    const statValue = heroe.powerstats?.[stat];
    if(!statValue || statValue === 'null') {
      return 0;
    }

    return Number(statValue);
  }

public rankingge = computed(()=>{
 return[...this.signalher()]
 .map((heroe: any)=> {
  const total =
  this.stat(heroe, 'intelligence') +
  this.stat(heroe, 'strength') +
  this.stat(heroe, 'speed') +
  this.stat(heroe, 'durability') +
  this.stat(heroe, 'power') +
  this.stat(heroe, 'combat');
  return {...heroe,totalstat: total};
})
.sort((a, b) => b.totalstat - a.totalstat)
.slice(0, 5);
});

public rankingin = computed(()=>{
  const stat = this.ranking();
  if(stat === 'total'){
    return this.rankingge();
  }

  return [...this.signalher()]
  .map((heroe: any)=> {
   const statValue = this.stat(heroe, stat);
   return {...heroe, statValue};
  })
  .sort((a, b) => b.statValue - a.statValue)
  .slice(0, 5);
})

  //======
  addfav(favh:any){
    const exis = this.favl().find(h => h.id === favh.id);
    if(exis){
      this.favl.set(this.favl().filter(h => h.id !== favh.id));
      console.log("prueba remocion", favh.name);
    }else{
      this.favl.set([...this.favl(), favh]);
      console.log("prueba 2, agregado", favh.name)
    }
    localStorage.setItem('fav', JSON.stringify(this.favl()));
  }

  favlist() {
  return this.favl();
}

//======
  // addteam(teamh:any){
  //   const exis = this.team().find(h => h.id === teamh.id);
  //   const teamli = Array.from(this.team() || []);
  //   if(exis){
  //     alert("ya existe");

  //     return;
  //   }
  //   if(this.team().length >= 5){
  //     alert("El equipo esta lleno");
  //     return;
  //   }

  //   teamli.push(teamh);
  //   this.team.set(teamli);

  //   localStorage.setItem('team', JSON.stringify(this.team()));
  // }

    addteam(teamh: any, eliminar: boolean = false) {
    const exis = this.team().find(h => h.id === teamh.id);
    const teamli = Array.from(this.team() || []);

    if (eliminar) {
      this.team.set(this.team().filter(h => h.id !== teamh.id));
      localStorage.setItem('team', JSON.stringify(this.team()));

      console.log("Eliminado siuu", teamh.name);

      return;
    }
    if (exis) {
      alert("ya existe");
      return;
    }
    if (this.team().length >= 5) {
      alert("El equipo esta lleno");
      return;
    }
    teamli.push(teamh);
    this.team.set(teamli);
    localStorage.setItem('team', JSON.stringify(this.team()));
    console.log("Agregado al equipo:", teamh.name);
  }


  teamlist(){
    return this.team();
  }

  favaloc(heroeId: string): boolean {
  if (!heroeId) return false;
  return this.favl().some(h => (h.id || h._id) === heroeId);
}

  teamloc(heroeId: string): boolean {
  if (!heroeId) return false;
  return this.team().some(h => (h.id || h._id) === heroeId);
}

}
