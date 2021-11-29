import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Funcionario } from './CriarFuncionario'

@Entity('entregaEPI')
class EntregaEPI {
    @PrimaryColumn()
    id: string;

    @Column()
    funcionario_id: string;

    @Column()
    nome_epi: string;

    @Column()
    data_entrega: Date;

    @Column()
    quantidade_entregue: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({name: 'funcionario_id'})
    @ManyToOne(() => Funcionario)
    funcionario: Funcionario

    constructor(){
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { EntregaEPI }