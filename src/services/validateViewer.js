/**
 * condições:
 * ○ O usuário informará quanto tempo pode gastar diariamente durante uma semana. Para
 * exemplo, [15, 120, 30, 150, 20, 40, 90] em minutos. // parâmetro no request 
 * ○ O usuário não gastará mais tempo assistindo a vídeos do que seu máximo diário.
 * ○ O usuário não iniciará outro vídeo, a menos que possa terminar no mesmo dia.
 * ○ Vídeos mais longos do que o dia mais longo serão ignorados.
 * ○ O usuário assistirá aos vídeos na ordem exata em que foram devolvidos.
 * 
 * ○ Exemplo: considerando a semana conforme declarado acima e a pesquisa retornando 10 
 * vídeos com as seguintes durações: [20, 30, 60, 90, 200, 30, 40, 20, 60, 15], em
 * no primeiro dia nenhum vídeo será assistido, no segundo o usuário assistirá 3 vídeos
 * [20, 30, 60], no terceiro nenhum será assistido, no quarto 2 [90, 30] será
 * assistido e um será ignorado, no quinto nenhum será assistido, no sexto
 * dia um vídeo [40] será assistido, no sétimo dia 2 será assistido [20, 60]
 * e no oitavo dia o último será assistido [15].
 * ○ Apenas os primeiros 200 vídeos devem ser considerados.
 */

