import { FranchiseInterface } from 'interfaces/franchise';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  name: string;
  franchise_id: string;
  created_at?: any;
  updated_at?: any;

  franchise?: FranchiseInterface;
  _count?: {};
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  franchise_id?: string;
}
