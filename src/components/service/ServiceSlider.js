import React from 'react';
import SubTitle from './ServiceSubtitle';
import SubBody from './ServiceBodyText';
import Bople from '../../assets/bople.png';


const ServiceSlider = () => {

    const bople = {
        width: '30px'
    };

    const data = {
        sub: 'GA의 운영을 돕는 서비스를 제공합니다',
        body: ['수많은 보험사의 상품을 운영하는 GA 업계 및 소속 설계사들은 고객의 입장에서 가장 적합한 라이프 플랜을 세워야 합니다. 기술을 통해 업무 프로세스를 간소화하고, 설계사들에게 잘 정리된 정보들을 제공함으로서 오직 고객에게만 집중할 수 있는 서비스를 제공합니다.',
    '세부보장내역까지 알려주는 가장 쉬운 보험 컨설팅. 가입한 보험 보장 분석과 컨설팅을 받고 현명한 보험 관리를 시작해보세요'
    ],
    };

    return(
        <div>

            <div>
                <SubTitle text={data.sub}/>
                <SubBody text={data.body[0]}/>
            </div>

            <div>
                <img src={Bople} style={bople} alt="bople" />
                <SubBody text={data.body[1]}/>
                <button>바로가기</button>
            </div>

        </div>


    );
};

export default ServiceSlider;