import { BrandEntity } from './brand-entity';
import { SocketEntity } from './socket-entity';

export class CpuEntity {
    id: number;
    cpuBrand: BrandEntity;
    cpuModel: string;
    cpuSocket: SocketEntity;
    cpuFreq: number;
    cpuCores: number;
    cpuThreads: number;
    cpuTdp: number;
    cpuPrice: number;

    getSocket(): SocketEntity
    {
        return this.cpuSocket;
    }
    getBrand(): BrandEntity
    {
        return this.cpuBrand;
    }

}
