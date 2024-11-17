"use client";

import {
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

import dynamic from "next/dynamic";
import { FiDownload } from "react-icons/fi";

Font.register({
  family: "NotoSansJP",
  fonts: [
    { src: "/fonts/NotoSansJP-Regular.ttf" },
    { src: "/fonts/NotoSansJP-Bold.ttf", fontWeight: "bold" },
  ],
});

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "NotoSansJP",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
});

// Define the resume data structure
const resumeData = {
  profile: {
    name: "遠藤 雄正",
    nameReading: "えんどう ゆうま",
    gender: "男",
    nationality: "日本",
    birthDate: "1995年1月",
    age: "29歳",
    itExperience: "6.3年",
    engineerType: "WEB/オープン系アプリケーション設計・開発",
    nearestStation: "中村橋駅",
  },
  certifications: [
    {
      name: "Oracle Certified Java Programmer, Silver SE 8 認定資格",
      date: "2019/04",
    },
    { name: "VBAエキスパート ExcelVBAスタンダード", date: "2019/05" },
    { name: "UiPath RPAアソシエイト資格試験（UiRPA）", date: "2019/06" },
  ],
  skills: [
    {
      category: "System Method",
      items: ["アジャイル型開発", "ウォーターフォール型開発", "MVCモデル"],
    },
    {
      category: "言語",
      items: [
        "Go",
        "JavaScript",
        "PHP",
        "Java",
        "TypeScript",
        "SQL",
        "Google Apps Script",
        "Swift",
        "Kotlin",
      ],
    },
    {
      category: "FW",
      items: [
        "Vue.js",
        "Vuetify",
        "Spring boot",
        "React.js",
        "Node.js",
        "Next.js",
        "MyBatis",
        "Playwright",
      ],
    },
    {
      category: "DB",
      items: [
        "PostgreSQL",
        "MySQL",
        "AWS RDS",
        "DynamoDB",
        "MongoDB",
        "Redis",
        "Oracle Database",
      ],
    },
    {
      category: "ミドルウェア/ツール",
      items: [
        "AWS",
        "Bitbucket",
        "Docker",
        "Figma",
        "JMeter",
        "AWS Lambda",
        "Swagger",
        "Azure AD",
        "Backlog",
        "Confluence",
        "GitHub",
        "JIRA",
      ],
    },
    {
      category: "SV/NW",
      items: [
        "AWS EC2",
        "AWS S3",
        "AWS RDS",
        "Linux（Ubuntu）",
        "VMware",
        "Amazon Workspaces",
      ],
    },
    {
      category: "構築工程(開発)",
      items: [
        "調査・分析",
        "要件定義",
        "基本設計",
        "詳細設計",
        "運用設計",
        "画面設計",
        "プログラミング",
        "単体テスト",
        "結合テスト",
        "システムテスト",
        "運用・保守",
      ],
    },
    {
      category: "役割",
      items: [
        "SL（サブリーダー）",
        "TL（チームリーダー）",
        "PM補佐",
        "ベンダーコントロール",
      ],
    },
  ],
  workHistory: [
    {
      period: "2024年3月 ～ 現在 (8ヶ月)",
      industry: "情報通信",
      projectName: "リース車両の販売管理システム開発",
      description: "リース車両の受発注時に用いる見積もり画面の刷新を担当。",
      environment: "Windows10, VDI, Azure, Git, Bitbucket, Confluence, Jira",
      languages: "Java, SpringBoot, React, TypeScript",
      role: "PE(メンバー)",
      teamSize: "8人",
    },
    // ... Add more work history items
  ],
  selfPR: `
    私の強みは協調性とチームワークを重視しながら高品質な成果を追求できる点です。
    これまでの経験を通じて、エンドユーザーとのコミュニケーションや要求定義、仕様調整を行う中でチーム全体の状況を的確に把握し、効果的な報告を心がけてきました。
    特に、結論ファーストでの情報提供を実践することで、チーム内の意思決定を迅速化し、対応策の検討に集中できる環境を整えることができました。

    また、さまざまな技術スタックを用いたプロジェクトに従事し迅速なMVP開発などの経験があります。
    これにより、技術者としてのスキルを向上させると同時にスタートアップ環境での柔軟な対応力を身につけました。
    今後もチームの一員として協力し合いながら、技術を深め、プロジェクトを円滑に進めていきたいと考えています。
    私の協調性を活かし、技術的な課題に対しても積極的に取り組む姿勢で貢献していきます。
  `,
};

// Create the PDF document
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>業務経歴書</Text>
        <Text style={styles.subtitle}>プロフィール</Text>
        <Text style={styles.text}>氏名: {resumeData.profile.name}</Text>
        <Text style={styles.text}>
          ふりがな: {resumeData.profile.nameReading}
        </Text>
        <Text style={styles.text}>性別: {resumeData.profile.gender}</Text>
        <Text style={styles.text}>国籍: {resumeData.profile.nationality}</Text>
        <Text style={styles.text}>
          生年月日: {resumeData.profile.birthDate}
        </Text>
        <Text style={styles.text}>年齢: {resumeData.profile.age}</Text>
        <Text style={styles.text}>
          IT経験年数: {resumeData.profile.itExperience}
        </Text>
        <Text style={styles.text}>
          エンジニア種類: {resumeData.profile.engineerType}
        </Text>
        <Text style={styles.text}>
          最寄駅: {resumeData.profile.nearestStation}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>保有資格</Text>
        {resumeData.certifications.map((cert, index) => (
          <Text key={index} style={styles.text}>
            {cert.name} ({cert.date})
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>技術スキル</Text>
        {resumeData.skills.map((skillCategory, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {skillCategory.category}: {skillCategory.items.join(", ")}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>職務経歴</Text>
        {resumeData.workHistory.map((job, index) => (
          <View key={index} style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{job.period}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{job.industry}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{job.projectName}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{job.role}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>自己PR</Text>
        <Text style={styles.text}>{resumeData.selfPR}</Text>
      </View>
    </Page>
  </Document>
);

export default function ResumeDownload() {
  return (
    <PDFDownloadLink document={<MyDocument />} fileName="resume1.pdf">
      <button
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded"
        disabled={false}
      >
        <FiDownload className="mr-2" />
      </button>
    </PDFDownloadLink>
  );
}
