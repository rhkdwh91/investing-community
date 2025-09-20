import Link from "next/link";

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">서비스 이용약관</h1>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (목적)</h2>
              <p className="text-gray-700 mb-4">
                본 약관은 FinSight(이하 "서비스")를 이용함에 있어 서비스 제공자(개인 개발자)와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (정의)</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>"서비스"란 FinSight가 제공하는 투자 커뮤니티 플랫폼을 의미합니다.</li>
                <li>"이용자"란 본 약관에 따라 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
                <li>"회원"이란 서비스에 회원등록을 하고 서비스를 이용하는 자를 말합니다.</li>
                <li>"게시물"이란 회원이 서비스를 이용함에 있어 게시한 글, 사진, 영상 등을 말합니다.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (약관의 게시와 개정)</h2>
              <p className="text-gray-700 mb-4">
                1. 본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 회원에게 공지합니다.
              </p>
              <p className="text-gray-700 mb-4">
                2. 서비스 제공자는 필요한 경우 관련 법령에 위배되지 않는 범위에서 본 약관을 개정할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (서비스의 제공 및 변경)</h2>
              <p className="text-gray-700 mb-4">
                1. 서비스 제공자는 다음과 같은 업무를 수행합니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>투자 관련 정보 공유 커뮤니티 제공</li>
                <li>회원 간 소통 플랫폼 제공</li>
                <li>기타 서비스 제공자가 정하는 업무</li>
              </ul>
              <p className="text-gray-700 mb-4">
                2. 서비스 제공자는 운영상, 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (서비스의 중단)</h2>
              <p className="text-gray-700 mb-4">
                서비스 제공자는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (회원가입)</h2>
              <p className="text-gray-700 mb-4">
                1. 이용자는 서비스 제공자가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
              </p>
              <p className="text-gray-700 mb-4">
                2. 서비스 제공자는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                <li>등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                <li>기타 회원으로 등록하는 것이 서비스의 기술상 현저히 지장이 있다고 판단되는 경우</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (회원정보의 변경)</h2>
              <p className="text-gray-700 mb-4">
                회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (개인정보보호)</h2>
              <p className="text-gray-700 mb-4">
                서비스 제공자는 관련법령이 정하는 바에 따라서 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법령 및 서비스 제공자의 개인정보처리방침이 적용됩니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (이용자의 의무)</h2>
              <p className="text-gray-700 mb-4">
                이용자는 다음 행위를 하여서는 안 됩니다:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>신청 또는 변경시 허위내용의 등록</li>
                <li>타인의 정보도용</li>
                <li>서비스에 게시된 정보의 변경</li>
                <li>서비스 제공자가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>서비스 제공자 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>서비스 제공자 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제10조 (저작권 및 게시물)</h2>
              <p className="text-gray-700 mb-4">
                1. 서비스에 대한 저작권 및 지적재산권은 서비스 제공자에게 있습니다.
              </p>
              <p className="text-gray-700 mb-4">
                2. 이용자가 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다.
              </p>
              <p className="text-gray-700 mb-4">
                3. 이용자는 서비스를 이용하여 취득한 정보를 서비스 제공자의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제11조 (면책조항)</h2>
              <p className="text-gray-700 mb-4">
                1. 서비스 제공자는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </p>
              <p className="text-gray-700 mb-4">
                2. 서비스 제공자는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
              </p>
              <p className="text-gray-700 mb-4">
                3. 서비스 제공자는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다.
              </p>
              <p className="text-gray-700 mb-4">
                4. 본 서비스는 투자 정보 공유를 목적으로 하며, 서비스 제공자는 투자 결과에 대한 책임을 지지 않습니다.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">제12조 (관할법원)</h2>
              <p className="text-gray-700 mb-4">
                서비스 이용으로 발생한 분쟁에 대해 소송이 제기되는 경우 서비스 제공자의 소재지를 관할하는 법원을 관할법원으로 합니다.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                본 약관은 2024년 1월 1일부터 시행됩니다.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                문의사항이 있으시면 서비스 내 문의 기능을 이용해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}