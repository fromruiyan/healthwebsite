//TotalCalorieTest

import { addCalorieItem } from './scripts';

const sum = (a, b) => a + b;

test('adjustedcalorie += foodcalorie', () => {
  //let adjustedcalorie = ; // 
  //const foodcalorie = ;    // scripts 에서 불러왔으면 함

  // adjestedcalorie와 foodcalorie를 더한 값을 expectedcalorie라고 둠
  const expectedCalorie = sum(adjustedcalorie, foodcalorie);


  // 결과 비교
  expect(adjustedcalorie).toBe(expectedCalorie);
});


//계산기 기능 테스트
//각각의 인수를 불러와서 더한 다음에 값이 맞는지 확인하고 싶어요 ㅠㅠ 감사합니다