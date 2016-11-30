![Tunning em servidor Linux](../images/terminal-console-linux.jpg)

Hoje o assunto será sobre Linux, em especial vou listar neste post uma série de configurações que vale a pena aplicar em seus servidores Linux.

Essas configurações, na maioria dos casos vão aumentar a performance de 10% à 40% em suas aplicações, um outro detalhe importante é que essas dicas podem resolver alguns gargalos da aplicação forma mais eficiente do que simplesmente adicionar uma nova máquina para processamento paralelo em seu load balancer.

### Aumentando os limites do Kernel

Por default o kernel Linux já vem com algumas configurações com limites restritos, mas é possível extrapolar algumas dessas configurações fazendo com que o sistema operacional se utilize ao máximo o hardware do servidor. Para isso você só precisa editar o arquivo **/etc/security/limits.conf** com os seguintes parâmetros:

 ``` bash
 # número de processos e threads
   nproc unlimited
   # número de arquivos abertos
   nofile 1048576
   # tamanho de locked-in-memory
   memlock unlimited
   # tamanho da memória virtual
   as unlimited
   # Tempo de cpu
   cpu unlimited
   # Tamanho de arquivo
   fsize unlimited
   # Total de memory-locks
   memlock unlimited
   # Tamanho da fila de mensageria
   msgqueue unlimited
   # Total de locks em threads
   locks unlimited
``` 

### Tunando o Kernel Sysctl

Este é um outro componente do kernel pelo qual iremos otimizar suas configurações de I/O, redes, swap e escalonamento de processos. Para configurá-lo basta editar o **/etc/sysctl.conf** com os parâmetros abaixo:

 ``` bash
 # Aumentando limite do file descriptor
   fs.file-max = 100000
   # Desabilitando memória swap
   vm.swappiness = 0
   # Aumentando range de portas do IP local e de conexões
   net.ipv4.ip_local_port_range = 10000 65000
   net.core.sormaxconn = 65000
   # Aumentando buffer de rede TCP
   # Defina o máximo de 16M (16777216) para redes de 1GB and 32M (33554432) ou 54M (56623104) para redes de 10GB
   net.core.rmem_max = 16777216
   net.core.wmem_max = 16777216
   net.core.rmem_default = 16777216
   net.core.wmem_default = 16777216
   net.ipv4.tcp_rmem = 4096 87380 16777216
   net.ipv4.tcp_wmem = 4096 65536 16777216
   # Aumentando tamanho de pacotes de backlog e buckets
   net.core.netdev_max_backlog = 50000
   net.ipv4.tcp_max_syn_backlog = 30000
   net.ipv4.tcp_max_tw_buckets = 2000000
   # Habilitando reuso de sockets TCP
   net.ipv4.tcp_tw_reuse = 1
   # Aumentando timeout do TCP para reuso de sockets
   net.ipv4.tcp_fin_timeout = 10
   # Destabilitando início lento de em conexões IDLE
   net.ipv4.tcp_slow_start_after_idle = 0
   # Aumentando buffer de conexões UDP
   net.ipv4.udp_rmem_min = 8192
   net.ipv4.udp_wmem_min = 8192
   # Desabilitando redirecionamento e roteamento
   net.ipv4.conf.all.send_redirects = 0
   net.ipv4.conf.all.accept_redirects = 0
   net.ipv4.conf.all.accept_source_route = 0
   # Habilitando log de pacotes
   net.ipv4.conf.all.log_martians = 1
   # Aumentando tempo de migração de processos entre cores da cpu e desabilitando auto-agrupamento de processos
   kernel.sched_migration_cost_ns = 5000000
   kernel.sched_autogroup_enabled = 0
``` 

Com essas configurações habilitadas, basta agora reiniciar o sistema operacional e monitorar o servidor para avaliar o quanto obteve de ganhos em performance, have a happy tunning!

**Fonte:** [Tweaked.IO Kernel](http://tweaked.io/guide/kernel/)