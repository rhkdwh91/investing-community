import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FS</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  FinSight
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            개인정보 처리방침
          </h1>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. 개인정보의 처리목적
              </h2>
              <p className="text-gray-700 mb-4">
                FinSight(이하 "서비스")는 다음의 목적을 위하여 개인정보를
                처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
                이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법
                제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
                예정입니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>서비스 제공 및 회원 관리</li>
                <li>이용자 식별 및 본인 확인</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>고객 문의 응답 및 서비스 관련 공지사항 전달</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. 개인정보의 처리 및 보유기간
              </h2>
              <p className="text-gray-700 mb-4">
                1. 서비스는 법령에 따른 개인정보 보유·이용기간 또는
                정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <p className="text-gray-700 mb-4">
                2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>회원 가입 및 관리:</strong> 회원 탈퇴 시까지
                </li>
                <li>
                  <strong>서비스 제공:</strong> 서비스 이용 종료 시까지
                </li>
                <li>
                  <strong>법령에 따른 보존:</strong> 관련 법령에서 정한 기간
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. 개인정보의 처리항목
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 다음의 개인정보 항목을 처리하고 있습니다:
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  필수항목
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>이메일 주소</li>
                  <li>비밀번호 (암호화하여 저장)</li>
                  <li>닉네임</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  자동 수집 항목
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>IP 주소</li>
                  <li>쿠키</li>
                  <li>MAC 주소</li>
                  <li>서비스 이용 기록</li>
                  <li>접속 로그</li>
                  <li>접속 기기 정보</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. 개인정보의 제3자 제공
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로
                명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의
                목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.
              </p>
              <p className="text-gray-700 mb-4">
                다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>정보주체로부터 별도의 동의를 받는 경우</li>
                <li>
                  법령의 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                  불가피한 경우
                </li>
                <li>
                  정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나
                  주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히
                  정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여
                  필요하다고 인정되는 경우
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. 개인정보처리의 위탁
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보
                처리업무를 위탁하고 있습니다:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  클라우드 서비스 제공업체
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
                  <li>위탁받는 자: Vercel, AWS 등</li>
                  <li>위탁하는 업무의 내용: 서버 호스팅 및 데이터 저장</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. 정보주체의 권리·의무 및 행사방법
              </h2>
              <p className="text-gray-700 mb-4">
                정보주체는 서비스에 대해 언제든지 다음 각 호의 개인정보 보호
                관련 권리를 행사할 수 있습니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>개인정보 처리현황 통지요구</li>
                <li>개인정보 열람요구</li>
                <li>개인정보 정정·삭제요구</li>
                <li>개인정보 처리정지요구</li>
              </ul>
              <p className="text-gray-700 mt-4">
                위의 권리 행사는 서비스에 대해 서면, 전화, 전자우편,
                모사전송(FAX) 등을 통하여 하실 수 있으며 서비스는 이에 대해
                지체없이 조치하겠습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. 개인정보의 파기
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  파기절차
                </h3>
                <p className="text-gray-700">
                  이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의
                  경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간
                  저장된 후 혹은 즉시 파기됩니다.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  파기방법
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                    방법을 사용합니다.
                  </li>
                  <li>
                    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                    파기합니다.
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. 개인정보의 안전성 확보조치
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에
                필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>개인정보 취급 직원의 최소화 및 교육</li>
                <li>개인정보에 대한 접근 제한</li>
                <li>개인정보를 저장하는 전산실, 자료보관실 등의 접근통제</li>
                <li>개인정보의 암호화</li>
                <li>해킹 등에 대비한 기술적 대책</li>
                <li>개인정보처리시스템 등의 접근기록 보관 및 위변조 방지</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. 쿠키(Cookie)의 운용 및 거부
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 이용자에게 개별적인 맞춤서비스를 제공하기 위해
                이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  쿠키의 사용목적
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>이용자의 접속 빈도나 방문 시간 등의 분석</li>
                  <li>이용자의 취향과 관심분야의 파악</li>
                  <li>
                    각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟
                    마케팅 및 개인 맞춤 서비스 제공
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  쿠키의 설치/운용 및 거부
                </h3>
                <p className="text-gray-700">
                  웹브라우저 상단의 도구 {">"} 인터넷 옵션 {">"} 개인정보 메뉴의
                  옵션 설정을 통해 쿠키 저장을 거부할 수 있습니다. 다만, 쿠키
                  저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
                  있습니다.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. 개인정보 보호책임자
              </h2>
              <p className="text-gray-700 mb-4">
                서비스는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
                처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
                같이 개인정보 보호책임자를 지정하고 있습니다:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">
                  개인정보 보호책임자
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>성명: 서비스 개발자</li>
                  <li>연락처: 서비스 내 문의 기능 이용</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                11. 개인정보 처리방침 변경
              </h2>
              <p className="text-gray-700 mb-4">
                이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
                변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행
                7일 전부터 공지사항을 통하여 고지할 것입니다.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                본 방침은 2024년 1월 1일부터 시행됩니다.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                개인정보 관련 문의사항이 있으시면 서비스 내 문의 기능을 이용해
                주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
