import { computed, Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
  
  private signalher = signal<any[]>([]);

  public team = signal<any[]>([]);
  public favl = signal<any[]>([]);
  private busqued = signal<string[]>([]);
  //  public busqued: number = 0;
  
public busquedhis= this.busqued.asReadonly();
public favlre= this.favl.asReadonly();
public teamrea= this.team.asReadonly();

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

  constructor(){
    this.histori();
    this.favcarg();
    this.teamcarg();
   // effect(()=>{console.log(`Funciona el filto?`,this.filtros())})
  }

  cargarheroe(heroe: any[]) {
    this.signalher.set(heroe);
  }

  filtrosap(filtrore: any){
    this.filtros.set(filtrore);
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

  //======
  addfav(favh:any){
    const exis = this.favl().find(h => h.id === favh.id);
    if(exis){
      this.favl.set(this.favl().filter(h => h.id !== favh.id));
      console.log("prueba", favh.name);
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
  addteam(teamh:any){
    const exis = this.team().find(h => h.id === teamh.id);
    const teamli = Array.from(this.team() || []);
    if(exis){
      alert("ya existe");
    return;
    }
    if(this.team().length >= 5){
      alert("El equipo esta lleno");
      return;
    }

    teamli.push(teamh);

    this.team.set(teamli);

    localStorage.setItem('team', JSON.stringify(this.team()));
  }

  teamlist(){
    return this.team();
  }
}





