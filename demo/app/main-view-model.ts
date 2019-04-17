import { Observable } from 'tns-core-modules/data/observable';
import { Ns3d } from 'nativescript-ns3d';

export class HelloWorldModel extends Observable {
  public message: string;
  private ns3d: Ns3d;

  constructor() {
    super();

    this.ns3d = new Ns3d();
    this.message = this.ns3d.message;
  }
}
