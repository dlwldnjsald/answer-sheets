$(document).ready(function() {
    
    // 폼 제출(submit) 이벤트 처리
    $('#prefer').on('submit', function(event) {
        event.preventDefault(); // 기본 제출 행동 방지
        
        // 선택된 과일 섭취 방식 확인
        var choice = $('input[name="fruit"]:checked').val();
        if (choice) {
            console.log('선호하는 과일 섭취 방식:', choice);
        }
    
        // 선택된 휴가 기간 활동 확인
        var activities = [];
        $('input[name="favorite"]:checked').each(function() {
            activities.push($(this).val());
        });
    
        if (activities.length > 0) {
            console.log('휴가 기간 할 활동:', activities.join(', '));
        }
    
        // 최소 1개의 체크박스
        if ($('input[name="favorite"]:checked').length === 0) {
            alert("최소 1개는 선택해야합니다.");
            return;
        }
    });



    // 폼 초기화(reset) 이벤트 처리
    $('#prefer').on('reset', function() {
        $('input[type="radio"], input[type="checkbox"]')
        .prop('checked', false);
    });



    // 버튼 클릭 이벤트 처리
    $('#btnHello').on('click', function() {
        alert('안녕하세요!');
    });


});
