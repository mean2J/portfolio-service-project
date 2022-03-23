import {Schema, model} from "mongoose";
const {
  Types: {ObjectId},
} = Schema;

/*
 *id : 프로젝트 아이디
 *user_id : 유저 아이디
 *title : 프로젝트 제목
 *description : 상세 내용
 *from_date : -
 *to_date : -
 *isPrivate : true면 해당 도큐먼트 비공개 설정(나만 보기) 
 */

const ProjectSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      default: "프로젝트 제목",
    },
    description: {
      type: String,
      required: true,
      default: "상세내역",
    },
    // 프로젝트 링크를 위한 스키마
    projectLink: {
      type: String,
    },
    from_date: {
      type: String,
      required: true,
    },
    to_date: {
      type: String,
      required: true,
    },
    isPrivate: {
      type: String,
      default : "false",
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = model("Project", ProjectSchema);

export {ProjectModel};
