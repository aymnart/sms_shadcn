import useDocumentTitle from "@/hooks/use-document-title";
import TeachersPage from "../data-table/data-table";

export default function TeachersList() {
  useDocumentTitle("Teachers List");

  return (
    <>
      <TeachersPage />
    </>
  );
}
