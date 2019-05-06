Search.setIndex({docnames:["Sc.sampling","index","modules","sciope","sciope.data","sciope.designs","sciope.features","sciope.inference","sciope.models","sciope.utilities","sciope.utilities.distancefunctions","sciope.utilities.housekeeping","sciope.utilities.mab","sciope.utilities.priors","sciope.utilities.summarystats","sciope.visualize"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["Sc.sampling.rst","index.rst","modules.rst","sciope.rst","sciope.data.rst","sciope.designs.rst","sciope.features.rst","sciope.inference.rst","sciope.models.rst","sciope.utilities.rst","sciope.utilities.distancefunctions.rst","sciope.utilities.housekeeping.rst","sciope.utilities.mab.rst","sciope.utilities.priors.rst","sciope.utilities.summarystats.rst","sciope.visualize.rst"],objects:{"":{sciope:[3,0,0,"-"]},"sciope.data":{dataset:[4,0,0,"-"]},"sciope.data.dataset":{DataSet:[4,1,1,""]},"sciope.data.dataset.DataSet":{add_points:[4,2,1,""],get_size:[4,2,1,""],process_outliers:[4,2,1,""],sync_log_scaled_datasets:[4,3,1,""]},"sciope.designs":{initial_design_base:[5,0,0,"-"]},"sciope.designs.initial_design_base":{InitialDesignBase:[5,1,1,""]},"sciope.designs.initial_design_base.InitialDesignBase":{generate:[5,2,1,""]},"sciope.features":{feature_extraction:[6,0,0,"-"]},"sciope.features.feature_extraction":{generate_tsfresh_features:[6,4,1,""],remove_nan_features:[6,4,1,""]},"sciope.inference":{abc_inference:[7,0,0,"-"],bandits_abc:[7,0,0,"-"],inference_base:[7,0,0,"-"]},"sciope.inference.abc_inference":{ABC:[7,1,1,""],ABCProcess:[7,1,1,""]},"sciope.inference.abc_inference.ABC":{infer:[7,2,1,""],perform_abc:[7,2,1,""],process_queue_outputs:[7,2,1,""],rejection_sampling:[7,2,1,""],scale_distance:[7,2,1,""]},"sciope.inference.abc_inference.ABCProcess":{run:[7,2,1,""]},"sciope.inference.bandits_abc":{BanditsABC:[7,1,1,""],arm_pull:[7,4,1,""]},"sciope.inference.bandits_abc.BanditsABC":{rejection_sampling:[7,2,1,""],scale_distance:[7,2,1,""]},"sciope.inference.inference_base":{InferenceBase:[7,1,1,""]},"sciope.inference.inference_base.InferenceBase":{infer:[7,2,1,""]},"sciope.models":{ann_regressor:[8,0,0,"-"],gp_regressor:[8,0,0,"-"],label_propagation:[8,0,0,"-"],model_base:[8,0,0,"-"],svm_regressor:[8,0,0,"-"]},"sciope.models.ann_regressor":{ANNModel:[8,1,1,""]},"sciope.models.ann_regressor.ANNModel":{predict:[8,2,1,""],train:[8,2,1,""]},"sciope.models.gp_regressor":{GPRModel:[8,1,1,""]},"sciope.models.gp_regressor.GPRModel":{predict:[8,2,1,""],train:[8,2,1,""]},"sciope.models.label_propagation":{Bounds:[8,1,1,""],LPModel:[8,1,1,""],RandomDisplacementBounds:[8,1,1,""],get_average_label_entropy:[8,4,1,""],get_label_entropies:[8,4,1,""]},"sciope.models.label_propagation.LPModel":{objective:[8,2,1,""],optimize:[8,2,1,""],predict:[8,2,1,""],train:[8,2,1,""]},"sciope.models.model_base":{ModelBase:[8,1,1,""]},"sciope.models.model_base.ModelBase":{predict:[8,2,1,""],scale_training_data:[8,2,1,""],train:[8,2,1,""]},"sciope.models.svm_regressor":{SVRModel:[8,1,1,""]},"sciope.models.svm_regressor.SVRModel":{predict:[8,2,1,""],train:[8,2,1,""],tune_parameters:[8,2,1,""]},"sciope.sampling":{maximin_sampling:[0,0,0,"-"],sampling_base:[0,0,0,"-"]},"sciope.sampling.maximin_sampling":{MaximinSampling:[0,1,1,""]},"sciope.sampling.maximin_sampling.MaximinSampling":{select_point:[0,2,1,""],select_points:[0,2,1,""]},"sciope.sampling.sampling_base":{SamplingBase:[0,1,1,""]},"sciope.sampling.sampling_base.SamplingBase":{select_point:[0,2,1,""],select_points:[0,2,1,""]},"sciope.utilities":{distancefunctions:[10,0,0,"-"],housekeeping:[11,0,0,"-"],mab:[12,0,0,"-"],priors:[13,0,0,"-"],summarystats:[14,0,0,"-"]},"sciope.utilities.distancefunctions":{distance_base:[10,0,0,"-"],euclidean:[10,0,0,"-"],manhattan:[10,0,0,"-"],naive_squared:[10,0,0,"-"]},"sciope.utilities.distancefunctions.distance_base":{DistanceBase:[10,1,1,""]},"sciope.utilities.distancefunctions.distance_base.DistanceBase":{compute:[10,2,1,""]},"sciope.utilities.distancefunctions.euclidean":{EuclideanDistance:[10,1,1,""]},"sciope.utilities.distancefunctions.euclidean.EuclideanDistance":{compute:[10,3,1,""]},"sciope.utilities.distancefunctions.manhattan":{ManhattanDistance:[10,1,1,""]},"sciope.utilities.distancefunctions.manhattan.ManhattanDistance":{compute:[10,3,1,""]},"sciope.utilities.distancefunctions.naive_squared":{NaiveSquaredDistance:[10,1,1,""]},"sciope.utilities.distancefunctions.naive_squared.NaiveSquaredDistance":{compute:[10,3,1,""]},"sciope.utilities.housekeeping":{sciope_logger:[11,0,0,"-"],sciope_profiler:[11,0,0,"-"]},"sciope.utilities.housekeeping.sciope_logger":{SciopeLogger:[11,1,1,""],Singleton:[11,1,1,""]},"sciope.utilities.housekeeping.sciope_logger.SciopeLogger":{get_log_dir_path:[11,2,1,""],get_logger:[11,2,1,""]},"sciope.utilities.housekeeping.sciope_profiler":{profile:[11,4,1,""]},"sciope.utilities.mab":{mab_base:[12,0,0,"-"],mab_direct:[12,0,0,"-"],mab_halving:[12,0,0,"-"],mab_incremental:[12,0,0,"-"],mab_sar:[12,0,0,"-"]},"sciope.utilities.mab.mab_base":{MABBase:[12,1,1,""]},"sciope.utilities.mab.mab_base.MABBase":{select:[12,2,1,""]},"sciope.utilities.mab.mab_direct":{MABDirect:[12,1,1,""]},"sciope.utilities.mab.mab_direct.MABDirect":{select:[12,2,1,""]},"sciope.utilities.mab.mab_halving":{MABHalving:[12,1,1,""]},"sciope.utilities.mab.mab_halving.MABHalving":{select:[12,2,1,""]},"sciope.utilities.mab.mab_incremental":{MABIncremental:[12,1,1,""]},"sciope.utilities.mab.mab_incremental.MABIncremental":{select:[12,2,1,""]},"sciope.utilities.mab.mab_sar":{MABSAR:[12,1,1,""]},"sciope.utilities.mab.mab_sar.MABSAR":{select:[12,2,1,""]},"sciope.utilities.priors":{prior_base:[13,0,0,"-"],uniform_prior:[13,0,0,"-"]},"sciope.utilities.priors.prior_base":{PriorBase:[13,1,1,""]},"sciope.utilities.priors.prior_base.PriorBase":{draw:[13,2,1,""]},"sciope.utilities.priors.uniform_prior":{UniformPrior:[13,1,1,""]},"sciope.utilities.priors.uniform_prior.UniformPrior":{draw:[13,2,1,""]},"sciope.utilities.summarystats":{burstiness:[14,0,0,"-"],global_max:[14,0,0,"-"],global_min:[14,0,0,"-"],summary_base:[14,0,0,"-"],temporal_mean:[14,0,0,"-"],temporal_variance:[14,0,0,"-"]},"sciope.utilities.summarystats.burstiness":{Burstiness:[14,1,1,""]},"sciope.utilities.summarystats.burstiness.Burstiness":{compute:[14,2,1,""]},"sciope.utilities.summarystats.global_max":{GlobalMax:[14,1,1,""]},"sciope.utilities.summarystats.global_max.GlobalMax":{compute:[14,2,1,""]},"sciope.utilities.summarystats.global_min":{GlobalMin:[14,1,1,""]},"sciope.utilities.summarystats.global_min.GlobalMin":{compute:[14,2,1,""]},"sciope.utilities.summarystats.summary_base":{SummaryBase:[14,1,1,""]},"sciope.utilities.summarystats.summary_base.SummaryBase":{compute:[14,2,1,""]},"sciope.utilities.summarystats.temporal_mean":{TemporalMean:[14,1,1,""]},"sciope.utilities.summarystats.temporal_mean.TemporalMean":{compute:[14,2,1,""]},"sciope.utilities.summarystats.temporal_variance":{TemporalVariance:[14,1,1,""]},"sciope.utilities.summarystats.temporal_variance.TemporalVariance":{compute:[14,2,1,""]},"sciope.visualize":{interactive_scatter:[15,0,0,"-"]},"sciope.visualize.interactive_scatter":{UserLabel:[15,1,1,""],annotate:[15,4,1,""],draw_scatterplot:[15,4,1,""],interative_scatter:[15,4,1,""]},"sciope.visualize.interactive_scatter.UserLabel":{add:[15,2,1,""],clear:[15,2,1,""]},sciope:{data:[4,0,0,"-"],designs:[5,0,0,"-"],features:[6,0,0,"-"],inference:[7,0,0,"-"],models:[8,0,0,"-"],sampling:[0,0,0,"-"],utilities:[9,0,0,"-"],visualize:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:function"},terms:{"6bb8ad2f1f18":15,"class":[0,4,5,7,8,10,11,12,13,14,15],"default":13,"function":[7,10,13],"new":[0,4],"return":[4,6,7,10,12,13,14],"static":[4,10],"true":[5,7,14],"var":6,"while":12,One:4,The:[0,7,8,10,12,13,14],Used:7,abc:[7,13],abc_infer:[2,3],abcprocess:7,absolute_sum_of_chang:6,accept:[7,12],accepted_count:7,accord:[0,7],across:14,activ:12,add:[0,4,15],add_point:4,added:4,adding:4,addit:4,agg_autocorrel:6,algorithm:[0,7,10,12,13],all:12,alpha:8,analysi:15,ann:8,ann_regressor:[2,3],annmodel:8,annot:15,appli:4,approxim:7,arg:7,argument:10,arm:[7,12],arm_idx:7,arm_pul:[7,12],arrai:[6,12],artifici:8,assist:7,avail:[0,8],averag:12,axi:15,bandit:[7,12],bandits_abc:[2,3],banditsabc:7,base:[0,4,5,7,8,10,11,12,13,14,15],basic:11,bayesian:7,best:12,between:[0,10],bia:4,both:4,bound:8,bubeck:12,bursti:[3,7,9],calcul:[4,6,10,14],call:10,can:[4,7],candid:0,carlo:0,check:4,cityblock:10,classabl:[0,5,7,8,10],clear:15,collect:4,column:4,com:15,compar:4,complex:14,comput:[0,7,10,14],configur:4,consist:12,contain:[4,6],content:2,context:7,converg:7,correspond:7,creat:[10,15],current:[0,4],daemon:7,dar:12,data:[2,3,6,7,8,10,11,14,15],data_class:15,dataset:[2,3,10],deactiv:12,defin:4,delta:12,deriv:[0,5,7,8,10],describ:[0,5,7,8,10,13],design:[0,2,3],desir:[7,12,13],dev:8,dict:6,dimension:13,direct:12,directli:[0,5,7,8,10],displac:8,dist:7,distanc:[0,7,10],distance_bas:[3,9],distance_funct:7,distancebas:10,distancefunct:[3,7,9],distribut:[7,13],divid:12,domain:5,donald:0,draw:13,draw_scatterplot:15,drawn:13,dure:[10,12],dynam:7,each:[0,5,7,8,10,12],effici:[10,12],either:[4,10,12],element:10,elimin:12,empir:12,end:12,enough:12,ensur:12,entir:14,epsilon:[7,12],equal:12,etc:[4,12],euclidean:[3,7,9],euclideandist:[7,10],europhi:14,even:12,except:4,exempel:6,exist:0,extract:6,f_agg:6,factorial_design:[2,3],fals:14,featur:[2,3],feature_extract:[2,3],few:4,fill:0,first:12,fix:[4,10,12,14],fixed_d:4,follow:[0,8],found:10,from:[7,12,13,15],function_handl:11,gamma:8,gaussian:8,gener:[0,5,6],generate_tsfresh_featur:6,get:0,get_average_label_entropi:8,get_label_entropi:8,get_log_dir_path:11,get_logg:11,get_siz:4,given:[5,7,8,10,12,14,15],global:14,global_max:[3,9],global_min:[3,9],globalmax:14,globalmin:14,gorjanz:15,gp_regressor:[2,3],gprmodel:8,group:7,half:12,halv:12,handl:4,here:[7,8],herein:[0,5,7,8,10],high:[4,12],highest:12,highligt:15,histor:7,housekeep:[3,9],http:15,identif:12,implement:[0,5,7,8,10],improv:[12,14],imput:4,includ:4,increment:[4,12],index:[1,7],indic:[4,12],infer:[0,2,3,4,10,13],inference_bas:[2,3],inferencebas:7,inform:4,init:10,initi:5,initial_design_bas:[2,3],initialdesignbas:5,input:[4,6,8],instanti:10,inter:4,interact:15,interactive_scatt:[2,3],interative_scatt:15,introduc:4,iqr:4,johnson:0,journal:0,kalyanakrishnan:12,keep:15,kei:0,kernel:8,kwarg:7,label:[8,12,15],label_distribut:8,label_propag:[2,3],latin_hypercube_sampl:[2,3],learning_r:8,least:12,len:12,lesli:0,let:14,like:12,list:6,log:[4,11],log_level:11,low:4,lowest:12,lpmodel:8,mab:[3,7,9,13],mab_bas:[3,9],mab_direct:[3,7,9],mab_halv:[3,9],mab_increment:[3,9],mab_sar:[3,9],mab_vari:7,mabbas:12,mabdirect:[7,12],mabhalv:12,mabincrement:12,mabsar:12,machin:8,manhattan:[3,9],manhattandist:10,mark:0,matplotlib:15,max_:8,max_i:13,maxim:[0,7],maximin:0,maximin_sampl:[],maximinsampl:0,maximum:14,mean:[4,6,8,12,14],mean_trajectori:14,median:12,medium:15,memori:14,method:[0,4,5,6,7,8,10,12],min_:8,min_i:13,minim:7,minimax:0,minimum:[0,14],mio_logg:[],mio_profil:[],miologg:[],miss:4,mlp:8,mode:4,model:[2,3,4],model_bas:[2,3],modelbas:8,modul:[1,2],moment:4,mont:0,moor:0,more:[7,10],multi:[7,12],multipl:12,multiprocess:7,must:[0,5,7,8,10],naiv:10,naive_squar:[3,9],naivesquareddist:10,name:[0,4,5,7,8,10,12,13,14],nan:6,need:4,network:8,neural:8,next:12,nfold:8,niter:8,non:6,none:[4,6,7,15],num:8,num_param:4,num_sampl:7,num_speci:4,num_timepoint:4,number:[4,6,7,12,13],numpi:[6,10],object:[0,4,5,7,8,10,11,12,13,14,15],observ:14,often:12,one:[0,7],onli:4,optim:[4,8,12],option:4,order:7,ordereddict:4,outlier:4,outlier_column_indic:4,output:7,over:[12,14],overridden:7,packag:2,page:1,pairwis:0,parallel:7,parallel_mod:7,param:[4,6,7,10,12,13,14],paramet:[4,7,10],perform:7,perform_abc:7,peter:12,phase:12,plan:0,plot:15,point:[0,4,5,6,8,15],posit:15,post:7,posterior:7,potenti:4,practic:12,predict:8,prior:[3,9],prior_bas:[3,9],prior_funct:7,priorbas:13,probabl:12,process:[7,8,12],process_outli:4,process_queue_output:7,profil:11,propag:8,properti:4,provid:[10,11],pull:[7,12],put:4,python:15,quantil:4,question:[4,12],queue:7,r_l:12,random:8,random_sampl:[2,3],randomdisplacementbound:8,rang:4,rank:0,rbf:8,ref:[12,14],refer:0,regress:8,regressor:8,reject:[7,12],rejection_sampl:7,relav:4,remain:12,remov:[4,6],remove_nan_featur:6,replac:4,respect:7,result:[7,14],reward:[7,12],round:12,run:[4,7],s_l:12,sampl:[7,12,13],sampler:7,sampling_bas:[],samplingbas:0,sar:12,scalar:12,scale:[4,7,8],scale_dist:7,scale_training_data:8,scatter:15,scatter_data:15,scatterplot:15,sciop:2,sciope_logg:[3,9],sciope_profil:[3,9],sciopelogg:11,scipi:10,score:4,search:1,select:[0,7,12,13],select_point:0,self:[8,13],semi:8,sequenti:0,seri:[4,6],serial:7,set:[12,14],shape:6,shivaram:12,should:10,sigma:14,sim:[7,10],sim_d:4,sim_stat:4,simpli:[7,14],simul:[4,10,14],singleton:11,size:[4,13],sklearn:8,solut:12,sourc:[0,4,5,6,7,8,10,11,12,13,14,15],space:[0,13],space_max:13,space_min:13,span:14,specifi:13,spread:8,squar:10,stat:[4,12],statist:[0,4,7,13,14],std:8,stepsiz:8,stone:12,sub:[0,5,7,8,10],submodul:[2,9],subpackag:2,subset:4,success:12,summari:[4,7,12,14],summaries_funct:7,summary_bas:[3,9],summary_stat:4,summarybas:14,summarystat:[3,7,9],supervis:8,support:[4,8],surrog:8,surviv:12,svm:8,svm_regressor:[2,3],svrmodel:8,sync_log_scaled_dataset:4,system:14,taken:[14,15],target:[4,7,8],task:4,tempor:14,temporal_mean:[3,9],temporal_vari:[3,9],temporalmean:14,temporalvari:14,test:8,test_input:8,text:15,than:10,them:[0,4],theori:12,time:[4,6,12,14],time_seri:4,todo:4,top:0,total:[6,7,12],track:15,train:8,treat:4,trial:7,trial_count:7,tsfresh:6,tune_paramet:8,two:10,type:[5,8,10,11],uniform:13,uniform_prior:[3,9],uniformprior:13,union:4,updat:4,use:[4,8],use_logg:5,used:[0,5,7,8,10,13,15],userlabel:15,using:[8,10,12],util:[2,3,7],valid:4,valu:[4,6,7,12,14,15],variabl:[0,4,8],varianc:[6,14],vector:[7,8,13],veri:[4,11],vishwanathan:12,visual:[2,3],wang:12,where:6,wise:10,within:[5,13],wrapper:7,x_valu:15,xmax:[0,5,8],xmin:[0,5,8],y_valu:15,ylvisak:0,zscore:4},titles:["sciope.sampling package","Welcome to sciope\u2019s documentation!","&lt;no title&gt;","sciope package","sciope.data package","sciope.designs package","sciope.features package","sciope.inference package","sciope.models package","sciope.utilities package","sciope.utilities.distancefunctions package","sciope.utilities.housekeeping package","sciope.utilities.mab package","sciope.utilities.priors package","sciope.utilities.summarystats package","sciope.visualize package"],titleterms:{abc_infer:7,ann_regressor:8,bandits_abc:7,bursti:14,content:[0,3,4,5,6,7,8,9,10,11,12,13,14,15],data:4,dataset:4,design:5,distance_bas:10,distancefunct:10,document:1,euclidean:10,factorial_design:5,featur:6,feature_extract:6,global_max:14,global_min:14,gp_regressor:8,housekeep:11,indic:1,infer:7,inference_bas:7,initial_design_bas:5,interactive_scatt:15,label_propag:8,latin_hypercube_sampl:5,mab:12,mab_bas:12,mab_direct:12,mab_halv:12,mab_increment:12,mab_sar:12,manhattan:10,maximin_sampl:0,mio:[],mio_logg:[],mio_profil:[],model:8,model_bas:8,modul:[0,3,4,5,6,7,8,9,10,11,12,13,14,15],naive_squar:10,packag:[0,3,4,5,6,7,8,9,10,11,12,13,14,15],prior:13,prior_bas:13,random_sampl:5,sampl:0,sampling_bas:0,sciop:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,15],sciope_logg:11,sciope_profil:11,submodul:[0,3,4,5,6,7,8,10,11,12,13,14,15],subpackag:[3,9],summary_bas:14,summarystat:14,svm_regressor:8,tabl:1,temporal_mean:14,temporal_vari:14,uniform_prior:13,util:[9,10,11,12,13,14],visual:15,welcom:1}})